import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

export const dateRangleStyles = StyleSheet.create({
  container: {
    backgroundColor: palette.Another.White,
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: palette.Primary.Normal,
  },
  selectedRange: {
    backgroundColor: palette.Primary.Assistive,
  },
  text: {
    fontFamily: 'Pretendard Variable',
  },
});
