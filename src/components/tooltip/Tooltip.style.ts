import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

const tooltipStyles = StyleSheet.create({
  container: {
    marginBottom: 4,
    alignItems: 'center',
  },
  typographyWrap: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: palette.Primary.Normal,
    alignSelf: 'flex-start',
  },
});

export default tooltipStyles;
