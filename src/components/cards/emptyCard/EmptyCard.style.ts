import {StyleSheet} from 'react-native';

import palette from '@/styles/theme/color';

export const emptyCardStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
    borderColor: palette.Line.Normal,
    padding: 16,
    gap: 16,
    alignItems: 'center',
    borderRadius: 16,
  },
});
