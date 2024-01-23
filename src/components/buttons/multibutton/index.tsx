import {View} from 'react-native';
import BoxButton from '../boxButton';
import multiButtonStyles from './MultiButton.style';

interface IMultiButtonProps {
  leftButtonText: string;
  rightButtonText: string;
  onLeftButtonPress: () => void;
  onRightButtonPress: () => void;
  disabled?: boolean;
}

const MultiButton = ({
  leftButtonText,
  rightButtonText,
  onLeftButtonPress,
  onRightButtonPress,
  disabled,
}: IMultiButtonProps) => {
  return (
    <View style={multiButtonStyles.container}>
      <BoxButton variant="default" width={'50%'} onPress={onLeftButtonPress}>
        {leftButtonText}
      </BoxButton>
      <BoxButton width={'50%'} onPress={onRightButtonPress} disabled={disabled}>
        {rightButtonText}
      </BoxButton>
    </View>
  );
};

export default MultiButton;
