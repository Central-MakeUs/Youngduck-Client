import {CommonTopProp} from '@/types/ui';
import {StyleSheet} from 'react-native';

interface IChangeNicknameScreenStylesProps extends CommonTopProp {
  bottom: number;
}

const changeNicknameScreenStyles = ({
  top,
  bottom,
}: IChangeNicknameScreenStylesProps) =>
  StyleSheet.create({
    topBarWrap: {
      flexDirection: 'row',
      padding: 16,
      paddingTop: 16 + top,
      alignItems: 'center',
    },
    topBar: {flex: 1, alignItems: 'center', paddingRight: 24},
    inputWrap: {
      flex: 1,
      paddingBottom: bottom + 16,
      justifyContent: 'space-between',
    },
  });

export default changeNicknameScreenStyles;
