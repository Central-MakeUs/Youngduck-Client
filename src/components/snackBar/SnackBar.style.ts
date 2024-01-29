import {StyleSheet} from 'react-native';

import {getScreenSize} from '@/utils/getScreenSize';

const {screenWidth} = getScreenSize();
export const snackBarStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    width: screenWidth - 30,
    backgroundColor: 'rgba(32, 31, 30, 0.9)',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 18,
  },
});
