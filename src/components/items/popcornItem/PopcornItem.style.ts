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
  image: {width: 88, height: 88, borderRadius: 8, marginRight: 16},
  contentWrap: {flex: 1, justifyContent: 'space-between'},
  voteWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default popcornItemStyles;
