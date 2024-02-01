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
      <View
        style={[
          reviewRateStyles.rateWrap,
          {
            borderColor: !negative
              ? palette.Primary.Normal
              : palette.Text.Assistive,
          },
        ]}
        key={`${category}-rateWrap`}>
        <View
          style={[
            reviewRateStyles.negativeWrap,
            {
              flex: negative,
              backgroundColor: negative
                ? palette.Fill.Assistive
                : palette.Primary.Assistive,
            },
          ]}
          key={`${category}-negative-wrap`}>
          <Typography
            style="Label1"
            color={negative ? palette.Text.Alternative : palette.Primary.Normal}
            key={`${category}-negative`}>
            {negative.toString()}
          </Typography>
        </View>
        <View
          style={[
            reviewRateStyles.positiveWrap,
            {
              flex: positive,
              backgroundColor: positive
                ? palette.Primary.Assistive
                : palette.Fill.Assistive,
            },
          ]}
          key={`${category}-positive-wrap`}>
          <Typography
            style="Label1"
            color={positive ? palette.Primary.Deep : palette.Text.Assistive}
            key={`${category}-positive`}>
            {positive.toString()}
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default ReviewRate;
