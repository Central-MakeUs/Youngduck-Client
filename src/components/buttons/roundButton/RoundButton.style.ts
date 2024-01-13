import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

export const roundButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: palette.Primary.Normal,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonDisabled: {
    backgroundColor: palette.Fill.Disable,
  },
});
