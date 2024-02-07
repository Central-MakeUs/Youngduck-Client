import {StyleSheet} from 'react-native';

export const selectItemStyles = ({bottom}: {bottom: number}) =>
  StyleSheet.create({
    flex: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      paddingBottom: bottom + 12,
    },
  });
