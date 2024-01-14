import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

export const cancelStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: palette.Fill.Normal,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
