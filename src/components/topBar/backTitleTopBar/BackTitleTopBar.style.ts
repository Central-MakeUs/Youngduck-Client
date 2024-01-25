import {CommonTopProp} from '@/types/ui';
import {StyleSheet} from 'react-native';

interface IBackTitleStyles extends CommonTopProp {
  opacity: number;
}

export const backTitleStyles = ({top, opacity}: IBackTitleStyles) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 16,
      width: '100%',
      paddingTop: top + 16,
      backgroundColor: `rgba(255,255,255,${1 - opacity})`,
    },
  });
