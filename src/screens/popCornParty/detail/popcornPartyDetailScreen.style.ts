import palette from '@/styles/theme/color';
import {getScreenSize} from '@/utils/getScreenSize';
import {StyleSheet} from 'react-native';

const {screenWidth} = getScreenSize();

const popcornPartyDetailScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: screenWidth,
    height: screenWidth,
  },
  imageBlur: {
    zIndex: 1,
    width: screenWidth,
    height: screenWidth,
    position: 'absolute',
  },
  recommandOtherButton: {
    width: '100%',
    backgroundColor: palette.Primary.Alternative,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
});

export default popcornPartyDetailScreenStyles;
