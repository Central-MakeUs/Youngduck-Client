import {View} from 'react-native';
import BoxButton from '../boxButton';
import multiButtonStyles from './MultiButton.style';

interface IMultiButtonProps {
  leftButtonText: string;
  rightButtonText: string;
  onLeftButtonPress: () => void;
  onRightButtonPress: () => void;
}

const MultiButton = ({
  leftButtonText,
  rightButtonText,
  onLeftButtonPress,
  onRightButtonPress,
}: IMultiButtonProps) => {
  return (
    <View style={multiButtonStyles.container}>
      <BoxButton variant="default" width={'50%'} onPress={onLeftButtonPress}>
        {leftButtonText}
      </BoxButton>
      <BoxButton width={'50%'} onPress={onRightButtonPress}>
        {rightButtonText}
      </BoxButton>
    </View>
  );
};

export default MultiButton;
