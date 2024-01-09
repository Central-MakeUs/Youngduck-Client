import {ILoginContainerStyleProps} from '@/types/login';
import {StyleSheet} from 'react-native';

const loginContainerStyles = ({
  top,
  bottom,
  width,
  height,
}: ILoginContainerStyleProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: top,
      paddingBottom: bottom,
    },
    image: {width: width, height: height, position: 'absolute', top: 0},
  });

export default loginContainerStyles;
