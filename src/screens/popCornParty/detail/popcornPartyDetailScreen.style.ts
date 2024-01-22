import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

const popcornPartyDetailScreenStyles = StyleSheet.create({
  introduceWrap: {paddingTop: 16, paddingBottom: 24},
  recommandOtherButton: {
    width: '100%',
    backgroundColor: palette.Primary.Alternative,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
});

export default popcornPartyDetailScreenStyles;
