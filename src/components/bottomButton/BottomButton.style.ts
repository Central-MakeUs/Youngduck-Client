import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

export const bottomButtonStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    paddingTop: 12,
    paddingBottom: 20,
    borderTopWidth: 2,
    borderTopColor: palette.Primary.Alternative,
    paddingHorizontal: 16,
  },
});
