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
  introduceWrap: {paddingTop: 16, paddingBottom: 24},
});

export default popcornPartyDetailScreenStyles;
