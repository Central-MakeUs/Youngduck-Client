import {useState} from 'react';
import {View} from 'react-native';
import {useQuery} from '@tanstack/react-query';

import DefaultContainer from '@/components/container/defaultContainer';
import CommentItem from '@/components/items/commentItem';
import BoxButton from '@/components/buttons/boxButton';
import Typography from '@/components/typography';
import LoadingPage from '@/components/pages/loadingPage';
import EmptyItem from '@/components/items/emptyItem';
import palette from '@/styles/theme/color';
import {getScreeningDetailReview} from '@/apis/screening/review';
import {getSimpleDate} from '@/utils/getDate';

import {reviewScreenStyles} from './DetailReviewScreen.style';

interface IDetailReviewProps {
  id: number;
}
const DetailReviewScreen = ({id}: IDetailReviewProps) => {
  const [moreComment, setMoreComment] = useState<boolean>(false);
  const {data, status, isLoading} = useQuery({
    queryKey: ['screeningReview'],
    queryFn: () => getScreeningDetailReview(id),
  });

  const reviewList = status === 'success' ? data.data : [];

  if (isLoading) {
    return (
      <View style={{height: 350}}>
        <LoadingPage />
      </View>
    );
  }

  if (reviewList.length === 0) {
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
                complainOnPress={() => {}}
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
                  complainOnPress={() => {}}
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
