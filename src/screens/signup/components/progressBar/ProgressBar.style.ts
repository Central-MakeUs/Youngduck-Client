import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

export const progressBarStyles = StyleSheet.create({
  progressBarContainer: {
    height: 2,
    width: '100%',
    backgroundColor: palette.Line.Normal,
    position: 'absolute',
  },
  progressBar: {
    height: 2,
    backgroundColor: palette.Primary.Normal,
  },
});
