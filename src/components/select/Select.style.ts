import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

export const selectStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
  },
  modal: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: palette.Another.White,
  },
  content: {
    width: '100%',
    paddingVertical: 20,
  },
  option: {
    width: '100%',
    alignItems: 'center',
  },
});
