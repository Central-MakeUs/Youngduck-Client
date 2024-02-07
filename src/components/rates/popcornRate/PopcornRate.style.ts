import palette from '@/styles/theme/color';
import {StyleSheet, ViewStyle} from 'react-native';

const commonContainerStyles: ViewStyle = {
  flex: 1,
  width: '100%',
  borderRadius: 8,
  paddingHorizontal: 16,
  paddingBottom: 4,
};

const popcornRateStyles = StyleSheet.create({
  openedContainer: {
    ...commonContainerStyles,
    backgroundColor: palette.Primary.Assistive,
  },
  closedContainer: {
    ...commonContainerStyles,
    backgroundColor: palette.Primary.Alternative,
  },
  manualWrap: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: palette.Primary.Normal,
  },
  manualDesc: {
    color: palette.Primary.Dark,
    textAlign: 'center',
  },
  manual: {
    marginTop: 16,
    marginBottom: 12,
    paddingVertical: 16,
    width: '100%',
    backgroundColor: palette.Another.White,
    borderRadius: 8,
    alignItems: 'center',
  },
  button: {
    borderRadius: 8,
    width: '100%',
    paddingVertical: 8,
    alignItems: 'center',
  },
});

export default popcornRateStyles;
