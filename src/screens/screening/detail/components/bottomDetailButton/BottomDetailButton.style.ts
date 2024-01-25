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
  myClose: {
    text: '비공개하기',
    color: palette.Text.Normal,
    disabled: false,
    option: 'write',
    optionDisabled: false,
    boxButtonType: 'default',
  },
  myOpen: {
    text: '공개하기',
    color: palette.Text.Normal,
    disabled: false,
    option: 'write',
    optionDisabled: false,
    boxButtonType: 'primary',
  },
};

export const bottomButtonStyles = StyleSheet.create({
  container: {
    backgroundColor: palette.Another.White,
    width: '100%',
    height: 80,
    paddingTop: 12,
    paddingBottom: 20,
    borderTopWidth: 2,
    borderTopColor: palette.Primary.Alternative,
    paddingHorizontal: 16,
    flexDirection: 'row',
    gap: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  left: {
    flex: 5.5,
  },
  right: {
    flex: 1,
  },
});
