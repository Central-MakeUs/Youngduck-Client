import palette from '@/styles/theme/color';
import {StyleSheet, ViewStyle} from 'react-native';

const commonButtonWrap: ViewStyle = {
  width: 28,
  height: 28,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 100,
};

const myManagementItemStyles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: palette.Another.White,
    marginBottom: 8,
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
  activatedButtonWrap: {
    ...commonButtonWrap,
    backgroundColor: palette.Primary.Assistive,
  },
  deactivatedButtonWrap: {
    ...commonButtonWrap,
    backgroundColor: palette.Fill.Normal,
  },
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
