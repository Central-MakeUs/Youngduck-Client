import {getScreenSize} from '@/utils/getScreenSize';
import {StyleSheet} from 'react-native';

const {screenWidth} = getScreenSize();

const writeReviewScreenStyles = StyleSheet.create({
  container: {flex: 1},
  commonContainer: {
    width: screenWidth,
    paddingHorizontal: 16,
  },
  agreementWrap: {
    flexDirection: 'row',
    paddingRight: 24,
  },
  paddingCheckBox: {paddingTop: 16},
});

export default writeReviewScreenStyles;
