import palette from '@/styles/theme/color';
import {StyleSheet, ViewStyle} from 'react-native';

const commonContainerStyles: ViewStyle = {
  borderWidth: 1,
  padding: 12,
  borderRadius: 16,
  flexDirection: 'row',
  marginBottom: 8,
};

const popcornItemStyles = StyleSheet.create({
  votedContainer: {
    ...commonContainerStyles,
    borderColor: palette.Primary.Deep,
    backgroundColor: palette.Primary.Assistive,
  },
  notVotedContainer: {
    ...commonContainerStyles,
    borderColor: palette.Line.Normal,
  },
  image: {width: 68, height: 100, borderRadius: 8, marginRight: 16},
  wrap: {
    flex: 1,
    justifyContent: 'space-between',
  },
  contentWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typoWrap: {flex: 8.5},
  voteWrap: {flex: 1.5, alignItems: 'flex-end'},
});

export default popcornItemStyles;
