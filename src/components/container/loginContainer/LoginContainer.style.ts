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
      paddingHorizontal: 32,
    },
    image: {
      width: width,
      height: height,
      position: 'absolute',
      resizeMode: 'stretch',
    },
  });

export default loginContainerStyles;
