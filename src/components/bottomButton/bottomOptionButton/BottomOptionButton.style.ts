import {StyleSheet} from 'react-native';

import palette from '@/styles/theme/color';

export const bottomOptionButtonStyles = ({bottom}: {bottom: number}) =>
  StyleSheet.create({
    container: {
      backgroundColor: palette.Another.White,
      width: '100%',
      height: 80,
      paddingTop: 12,
      paddingBottom: 20 + bottom,
      borderTopWidth: 2,
      borderTopColor: palette.Primary.Alternative,
      paddingHorizontal: 16,
      flexDirection: 'row',
      gap: 8,
    },
    left: {
      flex: 1,
    },
    right: {
      width: 48,
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
