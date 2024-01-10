import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 99,
    backgroundColor: palette.Primary.Normal,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  onePadding: {
    paddingHorizontal: 8,
  },
  twoPadding: {
    paddingHorizontal: 4,
  },
});
