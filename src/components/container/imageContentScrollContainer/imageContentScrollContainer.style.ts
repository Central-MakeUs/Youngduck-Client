import {StyleSheet} from 'react-native';

interface IImageContentScrollContainerStylesProps {
  width: number;
  height: number;
}

const imageContentScrollContainerStyles = ({
  width,
  height,
}: IImageContentScrollContainerStylesProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    topBarWrap: {width: '100%', position: 'absolute', zIndex: 1},
    image: {
      width,
      height,
    },
    imageBlur: {
      zIndex: 1,
      width,
      height,
      position: 'absolute',
    },
  });

export default imageContentScrollContainerStyles;
