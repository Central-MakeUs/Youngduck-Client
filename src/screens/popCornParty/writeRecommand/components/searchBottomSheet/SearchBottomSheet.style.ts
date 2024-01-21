import {StyleSheet} from 'react-native';
import {getScreenSize} from '@/utils/getScreenSize';

const {screenHeight} = getScreenSize();

interface ISearchBottomSheetStylesProp {
  bottom: number;
}

const searchBottomSheetStyles = ({bottom}: ISearchBottomSheetStylesProp) =>
  StyleSheet.create({
    container: {flex: 1, paddingBottom: screenHeight / 3 + bottom + 16},
    wrap: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
    },
    totalResultWrap: {flexDirection: 'row', marginTop: 16},
    selectButton: {flex: 1, flexDirection: 'column-reverse'},
  });

export default searchBottomSheetStyles;