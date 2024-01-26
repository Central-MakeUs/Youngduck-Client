import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

const manageReviewStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: palette.Line.Assistive,
    paddingVertical: 16,
  },
  countArrowWrap: {flexDirection: 'row', gap: 2, alignItems: 'center'},
});

export default manageReviewStyles;
