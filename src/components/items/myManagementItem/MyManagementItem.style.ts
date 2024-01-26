import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

const myManagementItemStyles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: palette.Another.White,
  },
  wrap: {
    flexDirection: 'row',
  },
  image: {width: 70, height: 70, borderRadius: 8, marginRight: 8},
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  contentWrap: {justifyContent: 'space-between'},
  reviewContainer: {
    borderTopWidth: 1,
    borderTopColor: palette.Line.Normal,
    marginTop: 16,
    paddingTop: 8,
    marginBottom: 12,
  },
  reviewWrap: {flexDirection: 'row', flexWrap: 'wrap', marginBottom: 12},
  reviewChip: {marginRight: 4},
});
export default myManagementItemStyles;
