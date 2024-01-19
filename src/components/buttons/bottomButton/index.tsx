import {View} from 'react-native';
import BoxButton from '../boxButton';
import {bottomButtonStyles} from './BottomButton.style';

interface IBottomButtonProps {
  title: string;
  onPress: () => void;
}
const BottomButton = ({title, onPress}: IBottomButtonProps) => {
  return (
    <View style={bottomButtonStyles.container}>
      <BoxButton onPress={onPress}>{title}</BoxButton>
    </View>
  );
};
export default BottomButton;
