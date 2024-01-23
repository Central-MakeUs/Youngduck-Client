import {StyleSheet} from 'react-native';

interface IGradientContainerStyleProps {
  top: number;
  bottom: number;
}

const gradientContainerStyles = ({top, bottom}: IGradientContainerStyleProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: top,
      paddingBottom: bottom,
    },
  });

export default gradientContainerStyles;
