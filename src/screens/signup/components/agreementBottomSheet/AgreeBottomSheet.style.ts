import {getScreenSize} from '@/utils/getScreenSize';
import {StyleSheet} from 'react-native';

const {screenHeight} = getScreenSize();

export const agreeBottomSheetStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    paddingBottom: screenHeight / 3 + 16,
    justifyContent: 'space-between',
  },
});
