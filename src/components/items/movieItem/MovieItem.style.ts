import palette from '@/styles/theme/color';
import {StyleSheet, ViewStyle} from 'react-native';

const commonContainerStyles: ViewStyle = {
  flexDirection: 'row',
  padding: 8,
  marginBottom: 4,
  borderRadius: 8,
};

const movieItemStyles = StyleSheet.create({
  selectedContainer: {
    ...commonContainerStyles,
    borderColor: palette.Primary.Deep,
    backgroundColor: palette.Primary.Assistive,
  },
  defaultContainer: {
    ...commonContainerStyles,
    borderColor: palette.Line.Normal,
  },
  image: {width: 44, height: 44, borderRadius: 4},
});

export default movieItemStyles;
