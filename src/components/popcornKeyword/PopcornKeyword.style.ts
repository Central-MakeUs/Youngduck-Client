import palette from '@/styles/theme/color';
import {StyleSheet} from 'react-native';

const popcornKeywordStyles = StyleSheet.create({
  keywordWrap: {
    width: '100%',
    borderRadius: 12,
    borderColor: palette.Line.Normal,
    borderWidth: 1,
    marginBottom: 12,
  },
  guageBar: {
    height: '100%',
    position: 'absolute',
    borderRadius: 12,
  },
  typographyWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default popcornKeywordStyles;
