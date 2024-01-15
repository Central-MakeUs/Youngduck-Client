import {getScreenSize} from '@/utils/getScreenSize';
import {StyleSheet} from 'react-native';

const {screenWidth} = getScreenSize();

const signupScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commonContainer: {
    width: screenWidth,
    justifyContent: 'space-between',
    padding: 16,
  },
});

export default signupScreenStyles;
