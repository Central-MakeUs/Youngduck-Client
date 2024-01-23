import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {View} from 'react-native';
import reviewRateStyles from './ReviewRate.style';

const ReviewRate = () => {
  const reviewLists = [
    {category: '작품 감상', negative: 3, positive: 10},
    {category: '상영 장소', negative: 2, positive: 11},
    {category: '운영 방식', negative: 1, positive: 12},
  ];
  return (
    <>
      {reviewLists.map(reviewList => (
        <View
          style={reviewRateStyles.container}
          key={`${reviewList.category}-container`}>
          <Typography
            style="Label3"
            color={palette.Text.Alternative}
            mb={4}
            key={`${reviewList.category}`}>
            {reviewList.category}
          </Typography>
          <View
            style={reviewRateStyles.rateWrap}
            key={`${reviewList.category}-rateWrap`}>
            <View
              style={[
                reviewRateStyles.negativeWrap,
                {flex: reviewList.negative},
              ]}
              key={`${reviewList.category}-negative-wrap`}>
              <Typography
                style="Label1"
                color={palette.Text.Alternative}
                key={`${reviewList.category}-negative`}>
                {reviewList.negative.toString()}
              </Typography>
            </View>
            <View
              style={[
                reviewRateStyles.positiveWrap,
                {flex: reviewList.positive},
              ]}
              key={`${reviewList.category}-positive-wrap`}>
              <Typography
                style="Label1"
                color={palette.Primary.Deep}
                key={`${reviewList.category}-positive`}>
                {reviewList.positive.toString()}
              </Typography>
            </View>
          </View>
        </View>
      ))}
    </>
  );
};

export default ReviewRate;
