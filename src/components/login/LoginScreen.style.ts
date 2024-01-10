import palette from '@/styles/colors';
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
  },
});

export default loginScreenStyles;
