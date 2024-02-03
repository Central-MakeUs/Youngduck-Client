import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

export const selectStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
  },
  modal: {
    alignItems: 'center',
    backgroundColor: palette.Another.White,
    borderRadius: 16,
  },
  content: {
    width: 343,
    paddingBottom: 16,
  },
  option: {
    width: '100%',
    alignItems: 'center',
  },
});
