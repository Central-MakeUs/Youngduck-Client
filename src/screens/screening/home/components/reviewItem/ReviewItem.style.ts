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
    flex: 1,
  },
  image: {
    borderRadius: 8,
    marginRight: 16,
    height: 72,
    flex: 1,
  },
  content: {
    flex: 3,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
