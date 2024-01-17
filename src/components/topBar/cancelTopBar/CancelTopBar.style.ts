import palette from '@/styles/theme/color';
import {CommonTopProp} from '@/types/ui';
import {StyleSheet} from 'react-native';

export const cancelStyles = ({top}: CommonTopProp) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 16,
      paddingHorizontal: 16,
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: palette.Fill.Normal,
      paddingTop: top,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
