import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

const reviewRateStyles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  rateWrap: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: palette.Line.Normal,
    overflow: 'hidden',
  },
  negativeWrap: {
    backgroundColor: palette.Fill.Assistive,
    paddingVertical: 4,
    paddingLeft: 16,
  },
  positiveWrap: {
    backgroundColor: palette.Primary.Assistive,
    alignItems: 'flex-end',
    paddingVertical: 4,
    paddingRight: 16,
  },
});

export default reviewRateStyles;
