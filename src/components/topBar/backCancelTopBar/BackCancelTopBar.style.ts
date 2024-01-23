import {CommonTopProp} from '@/types/ui';
import {StyleSheet} from 'react-native';

const backCancelTopBarStyles = ({top}: CommonTopProp) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 16,
      paddingHorizontal: 16,
      justifyContent: 'space-between',
      width: '100%',
      paddingTop: top + 16,
    },
  });

export default backCancelTopBarStyles;
