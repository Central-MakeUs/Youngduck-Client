import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

export const commentItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    borderBottomColor: palette.Line.Normal,
  },
  profileContentWrap: {flex: 1, flexDirection: 'row'},
  label: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  name: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
