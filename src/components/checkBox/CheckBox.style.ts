import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

export const checkBoxStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 4,
    width: 24,
    height: 24,
    borderColor: palette.Line.Normal,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeContainer: {
    backgroundColor: palette.Primary.Normal,
    borderWidth: 0,
  },
});
