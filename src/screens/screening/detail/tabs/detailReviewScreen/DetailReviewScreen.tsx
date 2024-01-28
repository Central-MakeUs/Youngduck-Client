import {View} from 'react-native';
import {useQuery} from '@tanstack/react-query';

import DefaultContainer from '@/components/container/defaultContainer';
import CommentItem from '@/components/items/commentItem';
import BoxButton from '@/components/buttons/boxButton';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {reviewScreenStyles} from './DetailReviewScreen.style';
import {getScreeningDetailReview} from '@/apis/screening/screening';
import EmptyItem from '@/components/items/emptyItem';
import {getDate} from '@/utils/getDate';

interface IDetailReviewProps {
  id: number;
}
const DetailReviewScreen = ({id}: IDetailReviewProps) => {
  const {data, status} = useQuery({
    queryKey: ['screeningReview'],
    queryFn: () => getScreeningDetailReview(id),
  });
  console.log('응답', data);

  const reviewList = status === 'success' ? data.data : [];

  return (
    <View>
      <DefaultContainer>
        {reviewList.length === 0 && (
          <View style={{height: 300}}>
            <EmptyItem size="large" text="댓글이 아직 없습니다" />
          </View>
        )}
        {reviewList && reviewList.length > 0 && (
          <>
            <View style={reviewScreenStyles.title}>
              <Typography style="Subtitle2" color={palette.Another.Black}>
                관객 리뷰
              </Typography>
              <Typography style="Label1" color={palette.Primary.Deep} ml={8}>
                {reviewList.length.toString()}
              </Typography>
            </View>
            {reviewList.map((comment, idx) => (
              <CommentItem
                totalComments={3}
                nickname={comment.nickname}
                isSatisfied={true}
                review={comment.review}
                date={getDate(comment.createdAt)}
                idx={idx}
                key={comment.reviewId}
              />
            ))}

            <View style={reviewScreenStyles.bottom}>
              <BoxButton onPress={() => {}} variant="default">
                더보기
              </BoxButton>
            </View>
          </>
        )}
      </DefaultContainer>
    </View>
  );
};
export default DetailReviewScreen;
