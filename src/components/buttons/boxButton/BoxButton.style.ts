import palette from '@/styles/theme/color';
import {DetailStyle, IVariant} from '@/types/ui';
import {StyleSheet} from 'react-native';

export const styleButton: Record<IVariant, DetailStyle> = {
  primary: {
    backgroundColor: palette.Primary.Normal,
    textColor: palette.Text.Normal,
  },
  secondary: {
    backgroundColor: palette.Primary.Alternative,
    textColor: palette.Primary.Dark,
  },
  default: {
    backgroundColor: palette.Fill.Strong,
    textColor: palette.Text.Alternative,
  },
  highlight: {
    backgroundColor: palette.State.Point,
    textColor: palette.Another.White,
  },
};

export const buttonStyles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  disabled: {
    backgroundColor: palette.Fill.Disable,
  },
});
