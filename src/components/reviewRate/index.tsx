import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {View} from 'react-native';
import reviewRateStyles from './ReviewRate.style';

interface IReviewRateProps {
  category: string;
  negative: number;
  positive: number;
}

const ReviewRate = ({category, negative, positive}: IReviewRateProps) => {
  return (
    <View style={reviewRateStyles.container} key={`${category}-container`}>
      <Typography
        style="Label3"
        color={palette.Text.Alternative}
        mb={4}
        key={`${category}`}>
        {category}
      </Typography>
      <View style={reviewRateStyles.rateWrap} key={`${category}-rateWrap`}>
        <View
          style={[reviewRateStyles.negativeWrap, {flex: negative}]}
          key={`${category}-negative-wrap`}>
          <Typography
            style="Label1"
            color={palette.Text.Alternative}
            key={`${category}-negative`}>
            {negative.toString()}
          </Typography>
        </View>
        <View
          style={[reviewRateStyles.positiveWrap, {flex: positive}]}
          key={`${category}-positive-wrap`}>
          <Typography
            style="Label1"
            color={palette.Primary.Deep}
            key={`${category}-positive`}>
            {positive.toString()}
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default ReviewRate;
