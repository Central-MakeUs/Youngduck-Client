import {StyleSheet} from 'react-native';

interface IChangeNicknameScreenStylesProps {
  bottom: number;
}

const changeNicknameScreenStyles = ({
  bottom,
}: IChangeNicknameScreenStylesProps) =>
  StyleSheet.create({
    inputWrap: {
      flex: 1,
      paddingBottom: bottom + 16,
      justifyContent: 'space-between',
    },
  });

export default changeNicknameScreenStyles;
