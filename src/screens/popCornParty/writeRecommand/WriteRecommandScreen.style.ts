import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

const writeRecommandScreenStyles = StyleSheet.create({
  container: {paddingHorizontal: 16},
  buttonMargin: {
    marginBottom: 24,
  },
  agreementWrap: {
    flexDirection: 'row',
    paddingRight: 24,
  },
  paddingCheckBox: {paddingTop: 16},
  registerButton: {
    borderTopWidth: 2,
    borderTopColor: palette.Primary.Alternative,
    paddingTop: 16,
    paddingBottom: 40,
    paddingHorizontal: 16,
  },
});

export default writeRecommandScreenStyles;
