import {getScreenSize} from '@/utils/getScreenSize';
import {StyleSheet} from 'react-native';

const {screenWidth} = getScreenSize();

const writeReviewScreenStyles = ({bottom}: {bottom: number}) =>
  StyleSheet.create({
    container: {flex: 1},
    commonContainer: {
      width: screenWidth,
      paddingHorizontal: 16,
    },
    agreementWrap: {
      flexDirection: 'row',
      paddingRight: 24,
    },
    paddingCheckBox: {paddingTop: 16},
    bottomButton: {marginBottom: 0, paddingTop: 10, paddingBottom: bottom},
  });

export default writeReviewScreenStyles;
