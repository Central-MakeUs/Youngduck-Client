import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  toggleContainer: {
    width: 40,
    height: 24,
    borderRadius: 99,
    justifyContent: 'center',
  },
  toggleWheel: {
    width: 16,
    height: 16,
    backgroundColor: palette.Another.White,
    borderRadius: 99,
  },
});
