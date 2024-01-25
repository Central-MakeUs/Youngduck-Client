import {StyleSheet} from 'react-native';

import {getScreenSize} from '@/utils/getScreenSize';

const {screenWidth} = getScreenSize();

export const screeningReviewStyle = StyleSheet.create({
  container: {
    width: screenWidth,
  },
  padding: {paddingLeft: 16},
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  bottom: {height: 88, marginBottom: 40, marginTop: 28},
  multi: {height: 88, marginBottom: 40},
  notice: {marginTop: 16, marginBottom: 40},
});
