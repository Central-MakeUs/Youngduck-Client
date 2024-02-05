import {StyleSheet} from 'react-native';

import palette from '@/styles/theme/color';
import {DetailOptionBottomButtonType} from '@/types/ui';

interface IBottomDetail {
  text: string;
  color: string;
  disabled: boolean;
  option: 'heart' | 'write';
  optionDisabled: boolean;
  boxButtonType: 'primary' | 'default';
}

export const bottomDetailTypesStyles: Record<
  DetailOptionBottomButtonType,
  IBottomDetail
> = {
  complete: {
    text: '신청완료',
    color: palette.Another.White,
    disabled: true,
    option: 'heart',
    optionDisabled: false,
    boxButtonType: 'default',
  },
  reviewStart: {
    text: '리뷰하기',
    color: palette.Text.Normal,
    disabled: false,
    option: 'heart',
    optionDisabled: true,
    boxButtonType: 'primary',
  },
  reviewComplete: {
    text: '리뷰완료',
    color: palette.Another.White,
    disabled: true,
    option: 'heart',
    optionDisabled: true,
    boxButtonType: 'default',
  },
};

export const bottomButtonStyles = ({bottom}: {bottom: number}) =>
  StyleSheet.create({
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      paddingBottom: bottom,
    },
  });
