import {getScreenSize} from '@/utils/getScreenSize';
import {StyleSheet} from 'react-native';

const {screenWidth} = getScreenSize();
export const ScreeningReviewStyle = StyleSheet.create({
  container: {
    width: screenWidth,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
