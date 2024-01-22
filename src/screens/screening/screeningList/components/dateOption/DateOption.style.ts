import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

export const dateOptionStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 4,
  },
});

interface IDateOptionDetail {
  textColor: string;
  textFont: string;
}
export const dateOptionsTypeStyles: Record<
  'focus' | 'notFocus',
  IDateOptionDetail
> = {
  focus: {
    textColor: palette.Text.Normal,
    textFont: 'Label2',
  },
  notFocus: {
    textColor: palette.Text.Alternative,
    textFont: 'Body2',
  },
};
