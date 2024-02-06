import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

const customTextInputStyles = StyleSheet.create({
  input: {
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    paddingVertical: 10,
    textAlignVertical: 'center',
  },
  error: {
    color: palette.State.Point,
    borderColor: palette.State.Point,
  },
  focused: {
    color: palette.Text.Strong,
    borderColor: palette.Primary.Normal,
  },
  default: {
    color: palette.Text.Alternative,
    borderColor: palette.Line.Normal,
  },
});

export default customTextInputStyles;
