import {CommonTopProp} from '@/types/ui';
import {StyleSheet} from 'react-native';

export const subMenuStyles = ({top}: CommonTopProp) =>
  StyleSheet.create({
    container: {
      width: '100%',
      paddingVertical: 8,
      paddingHorizontal: 16,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: top + 16,
    },
  });
