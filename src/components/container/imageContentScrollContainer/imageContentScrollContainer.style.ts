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
    height: screenWidth,
  },
  imageBlur: {
    zIndex: 1,
    width: screenWidth,
    height: screenWidth,
    position: 'absolute',
  },
});

export default imageContentScrollContainerStyles;
