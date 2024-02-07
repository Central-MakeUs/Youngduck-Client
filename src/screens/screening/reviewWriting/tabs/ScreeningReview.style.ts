import {StyleSheet} from 'react-native';

import {getScreenSize} from '@/utils/getScreenSize';
import palette from '@/styles/theme/color';

const {screenWidth} = getScreenSize();

export const screeningReviewStyle = ({bottom}: {bottom: number}) =>
  StyleSheet.create({
    container: {
      width: screenWidth,
    },
    padding: {paddingLeft: 16},
    flex: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    bottom: {
      paddingBottom: bottom + 12,
      paddingTop: 16,
      borderTopWidth: 2,
      borderTopColor: palette.Primary.Alternative,
    },
    notice: {marginTop: 16, marginBottom: 40},
  });
