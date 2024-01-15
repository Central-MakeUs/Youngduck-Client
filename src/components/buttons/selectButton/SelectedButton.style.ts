import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

const commonStyles = {
  paddigVertical: 8,
  paddingHorizontal: 16,
  borderRadius: 100,
  borderWidth: 1,
  marginBottom: 12,
  marginRight: 8,
};

export const selectedButtonStyles = StyleSheet.create({
  defaultButton: {
    ...commonStyles,
    borderColor: palette.Line.Normal,
  },
  selectedButton: {
    ...commonStyles,
    backgroundColor: palette.Primary.Normal,
    borderColor: palette.Primary.Normal,
  },
});
