import {StyleSheet} from 'react-native';

import palette from '@/styles/theme/color';
import {CommonTopProp} from '@/types/ui';

export const backTitleStyles = ({top}: CommonTopProp) =>
  StyleSheet.create({
    container: {
      width: '100%',
      padding: 16,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: palette.Another.White,
      paddingTop: top + 16,
    },
    display: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
