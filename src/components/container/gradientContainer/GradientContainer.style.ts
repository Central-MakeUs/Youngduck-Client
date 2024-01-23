import {StyleSheet} from 'react-native';

export interface IGradientContainerStyleProps {
  top: number;
  bottom: number;
  width: number;
  height: number;
}

const gradientContainerStyles = ({
  top,
  bottom,
  width,
  height,
}: IGradientContainerStyleProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: top,
      paddingBottom: bottom,
      paddingHorizontal: 32,
    },
    image: {
      width: width,
      height: height,
      position: 'absolute',
      resizeMode: 'stretch',
    },
  });

export default gradientContainerStyles;
