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
    overflow: 'hidden',
  },
  negativeWrap: {
    paddingVertical: 4,
    paddingLeft: 16,
  },
  positiveWrap: {
    alignItems: 'flex-end',
    paddingVertical: 4,
    paddingRight: 16,
  },
});

export default reviewRateStyles;
