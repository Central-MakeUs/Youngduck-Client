import palette from '@/styles/theme/color';
import {CommonTopProp} from '@/types/ui';
import {StyleSheet} from 'react-native';

export const cancelStyles = ({top}: CommonTopProp) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row-reverse',
      alignItems: 'center',
      paddingBottom: 16,
      paddingHorizontal: 16,
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: palette.Fill.Normal,
      paddingTop: top + 16,
      backgroundColor: palette.Another.White,
    },
    content: {
      flex: 1,
      alignItems: 'center',
    },
    cancelButton: {
      position: 'absolute',
      top: top + 16,
      marginRight: 16,
    },
  });
