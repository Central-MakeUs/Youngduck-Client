import {CommonTopProp} from '@/types/ui';
import {StyleSheet} from 'react-native';

export const textStyles = ({top}: CommonTopProp) =>
  StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'flex-start',
      paddingVertical: 16,
      paddingLeft: 16,
      paddingTop: top,
    },
  });
