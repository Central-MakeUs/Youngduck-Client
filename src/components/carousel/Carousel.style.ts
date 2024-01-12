import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

export const carouselStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: palette.Text.Alternative,
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: palette.Primary.Normal,
  },
});
