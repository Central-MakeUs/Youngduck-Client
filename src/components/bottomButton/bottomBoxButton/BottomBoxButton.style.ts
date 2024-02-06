import {StyleSheet} from 'react-native';

import palette from '@/styles/theme/color';

export const bottomButtonStyles = ({bottom}: {bottom: number}) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: 80,
      paddingTop: 12,
      paddingBottom: 20 + bottom,
      borderTopWidth: 2,
      borderTopColor: palette.Primary.Alternative,
      paddingHorizontal: 16,
      backgroundColor: palette.Another.White,
    },
  });
