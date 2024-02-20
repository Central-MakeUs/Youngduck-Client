import {TextInputStyle, TextInputType} from '@/types/ui';
import palette from './theme/color';
import {StyleSheet, ViewStyle} from 'react-native';

const commonInputStyles = {
  paddingHorizontal: 16,
  borderWidth: 1,
  borderRadius: 8,
  fontFamily: 'Pretendard-Regular',
};

// 공통 input styles
export const inputTypes: Record<TextInputType, TextInputStyle> = {
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
  active: {
    borderColor: palette.Primary.Normal,
    titleColor: palette.Text.Strong,
    contentColor: palette.Text.Alternative,
  },
  warning: {
    borderColor: palette.State.Point,
    titleColor: palette.State.Point,
    contentColor: palette.State.Point,
  },
};

export const inputStyles = StyleSheet.create({
  input: {
    ...commonInputStyles,
    paddingVertical: 10,
    textAlignVertical: 'center',
    fontSize: 16,
  },
  buntton: {
    ...commonInputStyles,
    paddingVertical: 8,
    borderColor: palette.Line.Normal,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export const commonInputButtonStyles: ViewStyle = {
  position: 'absolute',
  alignSelf: 'flex-end',
  paddingVertical: 2,
  paddingHorizontal: 4,
  right: 16,
  borderRadius: 4,
};
