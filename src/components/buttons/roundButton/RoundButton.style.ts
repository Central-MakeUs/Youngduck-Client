import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

export const roundButtonStyles = StyleSheet.create({
  button: {
    borderRadius: 99,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  buttonDisabled: {
    backgroundColor: palette.Fill.Disable,
  },
});
