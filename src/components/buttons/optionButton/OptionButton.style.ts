import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

type optionType = 'selected' | 'nonSelected';
type optionStyle = {
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
};

export const optionTypeStyles: Record<optionType, optionStyle> = {
  nonSelected: {
    borderWidth: 1,
    borderColor: palette.Fill.Strong,
  },
  selected: {
    backgroundColor: palette.Primary.Alternative,
  },
};
export const optionStyles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 17,
    justifyContent: 'center',
  },
});
