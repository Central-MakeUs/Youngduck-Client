import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

interface ILoginScreenStylesProps {
  width: number;
  height: number;
}

const loginScreenStyles = ({width, height}: ILoginScreenStylesProps) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      justifyContent: 'center',
    },
    description: {
      fontWeight: '400',
      fontSize: 36,
      lineHeight: 48,
      color: palette.Primary.Dark,
      marginBottom: 8,
      fontFamily: 'Pretendard Variable',
    },
    image: {
      width: width,
      height: height,
      position: 'absolute',
      resizeMode: 'stretch',
    },
  });

export default loginScreenStyles;
