import {StyleSheet} from 'react-native';

import palette from '@/styles/theme/color';

interface IBottomDetail {
  text: string;
  color: string;
  disabled: boolean;
  heartDisabled: boolean;
}

export const bottomDetailTypesStyles: Record<
  'complete' | 'reviewStart' | 'reviewComplete',
  IBottomDetail
> = {
  complete: {
    text: '신청완료',
    color: palette.Another.White,
    disabled: true,
    heartDisabled: false,
  },
  reviewStart: {
    text: '리뷰하기',
    color: palette.Text.Normal,
    disabled: false,
    heartDisabled: true,
  },
  reviewComplete: {
    text: '리뷰완료',
    color: palette.Another.White,
    disabled: true,
    heartDisabled: true,
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
