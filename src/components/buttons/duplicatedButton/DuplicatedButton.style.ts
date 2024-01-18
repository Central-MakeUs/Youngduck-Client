import {commonInputButtonStyles} from '@/styles/Input.style';
import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

export const duplicatedStyles = StyleSheet.create({
  activated: {
    ...commonInputButtonStyles,
    backgroundColor: palette.Primary.Assistive,
  },
  deActivated: {
    ...commonInputButtonStyles,
    backgroundColor: palette.Fill.Normal,
  },
});
