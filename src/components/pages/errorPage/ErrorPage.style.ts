import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

const errorPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: palette.Fill.Normal,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
});

export default errorPageStyles;
