import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

export const defaultContainerStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    display: 'flex',
    flex: 1,
    backgroundColor: palette.Another.White,
  },
});
