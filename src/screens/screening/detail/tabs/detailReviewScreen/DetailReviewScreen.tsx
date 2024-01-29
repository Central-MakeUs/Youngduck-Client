import {useState} from 'react';
import {View} from 'react-native';
import {useQueries, useQuery} from '@tanstack/react-query';

import DefaultContainer from '@/components/container/defaultContainer';
import CommentItem from '@/components/items/commentItem';
import BoxButton from '@/components/buttons/boxButton';
import Typography from '@/components/typography';
import LoadingPage from '@/components/pages/loadingPage';
import EmptyItem from '@/components/items/emptyItem';
import palette from '@/styles/theme/color';
import {
  getScreeningDetailReview,
  getScreeningRateReview,
} from '@/apis/screening/review';
import {getSimpleDate} from '@/utils/getDate';
import useScreeningMutation from '@/hooks/mutaions/useScreeningMutation';
import Popup from '@/components/popup';

import {reviewScreenStyles} from './DetailReviewScreen.style';

interface IDetailReviewProps {
  id: number;
}
const DetailReviewScreen = ({id}: IDetailReviewProps) => {
  const [complainPopup, setComplainPopup] = useState<boolean>(false);
  const [reviewId, setReviewId] = useState<number>(0);

  const [moreComment, setMoreComment] = useState<boolean>(false);

  const [reviews, screeningRates] = useQueries({
    queries: [
      {
        queryKey: ['screeningReview', id],
        queryFn: () => getScreeningDetailReview(id),
      },
      {
        queryKey: ['screeningRate', id],
        queryFn: () => getScreeningRateReview(id),
      },
    ],
  });

  console.log('상영지수', screeningRates.data?.data);

  const reviewList = reviews.data?.data ? reviews.data.data : [];

  const {complainScreeningReview} = useScreeningMutation();

  const handleComplainReview = async () => {
    setComplainPopup(false);
    await complainScreeningReview.mutateAsync(reviewId);
  };

  if (reviews.isLoading) {
    return (
      <View style={{height: 350}}>
        <LoadingPage />
      </View>
    );
  }

  if (reviewList && reviewList.length === 0) {
    return (
      <View
        style={{
          height: 350,
        }}>
        <EmptyItem size="large" text="댓글이 아직 없습니다" />
      </View>
    );
  }
  return (
    <DefaultContainer>
      {reviewList && (
        <>
          <Popup
            title="정말 신고하시겠어요?"
            content={`신고가 누적되면\n해당 유저의 서비스 이용이 제한돼요. `}
            isVisible={complainPopup}
            onClose={() => {
              setComplainPopup(false);
            }}
            onPress={handleComplainReview}
            type="error"
          />
          <View style={reviewScreenStyles.title}>
            <Typography style="Subtitle2" color={palette.Another.Black}>
              관객 리뷰
            </Typography>
            <Typography style="Label1" color={palette.Primary.Deep} ml={8}>
              {reviewList.length.toString()}
            </Typography>
          </View>
          {reviewList
            .slice(0, reviewList.length > 4 ? 5 : reviewList.length)
            .map((comment, idx) => (
              <CommentItem
                totalComments={reviewList.length}
                nickname={comment.nickname}
                isSatisfied={comment.afterScreening}
                review={comment.review}
                date={getSimpleDate(comment.createdAt)}
                idx={idx}
                key={idx}
                complainOnPress={() => {
                  setReviewId(comment.reviewId);
                  setComplainPopup(true);
                }}
              />
            ))}
          {reviewList.length > 5 && !moreComment ? (
            <View style={reviewScreenStyles.bottom}>
              <BoxButton
                onPress={() => {
                  setMoreComment(true);
                }}
                variant="default">
                더보기
              </BoxButton>
            </View>
          ) : (
            <>
              {reviewList.slice(5).map((comment, idx) => (
                <CommentItem
                  totalComments={reviewList.length}
                  nickname={comment.nickname}
                  isSatisfied={comment.afterScreening}
                  review={comment.review}
                  date={getSimpleDate(comment.createdAt)}
                  idx={idx}
                  key={idx}
                  complainOnPress={() => {
                    setReviewId(comment.reviewId);
                    setComplainPopup(true);
                  }}
                />
              ))}
            </>
          )}
        </>
      )}
    </DefaultContainer>
  );
};
export default DetailReviewScreen;
