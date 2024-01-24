import palette from '@/styles/theme/color';
import {StyleSheet, ViewStyle} from 'react-native';

const commonStyles: ViewStyle = {
  height: 40,
  paddingHorizontal: 16,
  borderRadius: 100,
  borderWidth: 1,
  marginBottom: 12,
  marginRight: 8,
  justifyContent: 'center',
  alignSelf: 'flex-start',
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
