import palette from '@/styles/theme/color';
import {DetailStyle, IChip} from '@/types/ui';
import {StyleSheet} from 'react-native';

export const chipStyle: Record<IChip, DetailStyle> = {
  primary: {
    backgroundColor: palette.Primary.Assistive,
    textColor: palette.Primary.Dark,
  },
  default: {
    backgroundColor: palette.Fill.Normal,
    textColor: palette.Text.Alternative,
  },
};

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
});
