import palette from '@/styles/theme/color';
import {getScreenSize} from '@/utils/getScreenSize';
import {StyleSheet} from 'react-native';

const {screenWidth} = getScreenSize();
export const reviewItemStyles = StyleSheet.create({
  container: {
    width: screenWidth - 32,
    borderWidth: 1,
    borderColor: palette.Line.Normal,
    borderRadius: 16,
    padding: 16,
    height: 110,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    borderRadius: 8,
    marginRight: 16,
    height: 78,
    width: 78,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
});
