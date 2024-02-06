import {StyleSheet} from 'react-native';

import {getScreenSize} from '@/utils/getScreenSize';

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
      paddingBottom: bottom,
      height: 88,
      marginBottom: 40,
      paddingTop: 10,
    },
    notice: {marginTop: 16, marginBottom: 40},
  });
