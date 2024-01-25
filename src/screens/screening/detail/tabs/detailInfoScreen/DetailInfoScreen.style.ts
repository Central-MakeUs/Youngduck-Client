import {StyleSheet, ViewStyle} from 'react-native';

const content: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 4,
};

export const detailInfoStyles = StyleSheet.create({
  content: {
    ...content,
  },
  bottomContent: {
    ...content,
    marginBottom: 31,
  },
});
