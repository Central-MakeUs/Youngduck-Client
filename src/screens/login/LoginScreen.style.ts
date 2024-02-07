import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

interface ILoginScreenStylesProps {
  bottom: number;
}

const loginScreenStyles = ({bottom}: ILoginScreenStylesProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 32,
    },
    wrapper: {
      flex: 1,
      justifyContent: 'center',
    },
    description: {
      fontWeight: '400',
      fontSize: 32,
      lineHeight: 42,
      color: palette.Primary.Dark,
      marginBottom: 8,
      fontFamily: 'Pretendard-Regular',
    },
    image: {position: 'absolute', bottom: -bottom},
  });

export default loginScreenStyles;
