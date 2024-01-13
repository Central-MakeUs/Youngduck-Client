import palette from '@/styles/theme/color';
import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen');

export const progressBarStyles = (currentScreen: number) =>
  StyleSheet.create({
    currentProgress: {
      backgroundColor: palette.Primary.Normal,
      width: currentScreen ? width * 2 : width / 2,
      height: 2,
      position: 'absolute',
      zIndex: 1,
    },
    behind: {
      backgroundColor: palette.Line.Normal,
      width: '100%',
      height: 2,
      position: 'absolute',
      zIndex: -1,
    },
  });
