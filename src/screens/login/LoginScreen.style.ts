import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

const loginScreenStyles = StyleSheet.create({
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
});

export default loginScreenStyles;
