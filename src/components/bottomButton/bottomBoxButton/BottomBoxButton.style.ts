import {StyleSheet} from 'react-native';

import palette from '@/styles/theme/color';

export const bottomButtonStyles = ({bottom}: {bottom: number}) =>
  StyleSheet.create({
    container: {
      width: '100%',
      paddingTop: 12,
      bottom,
      borderTopWidth: 2,
      borderTopColor: palette.Primary.Alternative,
      paddingHorizontal: 16,
      backgroundColor: palette.Another.White,
    },
  });
