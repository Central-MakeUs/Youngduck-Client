import {CommonTopProp} from '@/types/ui';
import {StyleSheet} from 'react-native';

export const backStyles = ({top}: CommonTopProp) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 16,
      width: '100%',
      paddingTop: top,
    },
  });
