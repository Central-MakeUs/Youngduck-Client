import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

type heartType = 'selected' | 'nonSelected';
type heartStyle = {
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
};

export const heartTypeStyles: Record<heartType, heartStyle> = {
  nonSelected: {
    borderWidth: 1,
    borderColor: palette.Fill.Strong,
  },
  selected: {
    backgroundColor: palette.Primary.Alternative,
  },
};
export const heartStyles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 17,
    justifyContent: 'center',
  },
});
