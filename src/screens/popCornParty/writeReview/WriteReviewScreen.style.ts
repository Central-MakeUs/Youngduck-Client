import {getScreenSize} from '@/utils/getScreenSize';
import {StyleSheet} from 'react-native';

const {screenWidth} = getScreenSize();

const writeReviewScreenStyles = StyleSheet.create({
  container: {flex: 1},
  commonContainer: {
    width: screenWidth,
    padding: 16,
  },
});

export default writeReviewScreenStyles;
