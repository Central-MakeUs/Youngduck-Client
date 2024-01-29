import {getScreenSize} from '@/utils/getScreenSize';
import {StyleSheet} from 'react-native';

const {screenWidth} = getScreenSize();

const imageContentScrollContainerStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBarWrap: {width: '100%', position: 'absolute', zIndex: 1},
  image: {
    width: screenWidth,
    height: screenWidth * 1.47,
  },
  imageBlur: {
    zIndex: 1,
    width: screenWidth,
    height: screenWidth * 1.47,
    position: 'absolute',
  },
});

export default imageContentScrollContainerStyles;
