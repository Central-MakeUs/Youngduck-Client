import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

const popcornPartyDetailScreenStyles = StyleSheet.create({
  reviewTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  button: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  bottomButton: {
    paddingHorizontal: 16,
    paddingTop: 16,
    borderTopWidth: 2,
    borderTopColor: palette.Primary.Alternative,
  },
});

export default popcornPartyDetailScreenStyles;
