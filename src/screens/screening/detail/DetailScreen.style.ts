import {getScreenSize} from '@/utils/getScreenSize';
import {StyleSheet} from 'react-native';

const {screenHeight} = getScreenSize();
export const detailScreenStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  content: {
    height: screenHeight - 80,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    height: 80,
    width: '100%',
  },
  container: {
    paddingBottom: 80,
  },
});
