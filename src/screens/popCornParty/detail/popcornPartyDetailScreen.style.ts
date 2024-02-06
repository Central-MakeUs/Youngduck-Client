import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

const popcornPartyDetailScreenStyles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
  },
  bottomButton: {
    paddingHorizontal: 16,
    paddingTop: 16,
    marginTop: 24,
    borderTopWidth: 1,
    borderTopColor: palette.Primary.Normal,
  },
});

export default popcornPartyDetailScreenStyles;
