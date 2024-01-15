import palette from '@/styles/theme/color';
import {ITextInput, TextInputStyle} from '@/types/ui';
import {StyleSheet, ViewStyle} from 'react-native';

export const textInputTypes: Record<ITextInput, TextInputStyle> = {
  default: {
    borderColor: palette.Line.Normal,
    titleColor: palette.Text.Alternative,
    contentColor: palette.Text.Alternative,
  },
  writed: {
    borderColor: palette.Line.Normal,
    titleColor: palette.Text.Strong,
    contentColor: palette.Text.Alternative,
  },
  caution: {
    borderColor: palette.State.Point,
    titleColor: palette.State.Point,
    contentColor: palette.State.Point,
  },
  warning: {
    borderColor: palette.State.Point,
    titleColor: palette.State.Point,
    contentColor: palette.State.Point,
  },
  active: {
    borderColor: palette.Primary.Normal,
    titleColor: palette.Text.Strong,
    contentColor: palette.Text.Alternative,
  },
};

const commonStyles: ViewStyle = {
  position: 'absolute',
  alignSelf: 'flex-end',
  paddingVertical: 2,
  paddingHorizontal: 4,
  right: 16,
  borderRadius: 4,
};

export const textInputStyles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  activated: {
    ...commonStyles,
    backgroundColor: palette.Primary.Assistive,
  },
  deActivated: {
    ...commonStyles,
    backgroundColor: palette.Fill.Normal,
  },
});
