import {StyleSheet} from 'react-native';

const searchBottomSheetStyles = StyleSheet.create({
  container: {flex: 1},
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  totalResultWrap: {flexDirection: 'row', marginTop: 16},
  emptyResponseWrap: {
    height: 238,
  },
});

export default searchBottomSheetStyles;
