import {StyleSheet} from 'react-native';

export const reviewScreenStyles = ({bottom}: {bottom: number}) =>
  StyleSheet.create({
    title: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
      marginTop: 8,
    },
    commentWrap: {
      paddingBottom: bottom + 12,
    },
    bottom: {
      marginBottom: 18,
    },
  });
