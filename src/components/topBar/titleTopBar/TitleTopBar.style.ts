import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

export const titleStyles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: palette.Another.White,
  },
});
