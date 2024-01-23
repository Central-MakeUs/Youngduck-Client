import {View} from 'react-native';
import BoxButton from '../boxButton';
import multiButtonStyles from './MultiButton.style';
import {getScreenSize} from '@/utils/getScreenSize';

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
  const {screenWidth} = getScreenSize();
  const buttonWidth = (screenWidth - 40) / 2;
  return (
    <View style={multiButtonStyles.container}>
      <BoxButton
        variant="default"
        width={buttonWidth}
        onPress={onLeftButtonPress}>
        {leftButtonText}
      </BoxButton>
      <BoxButton
        width={buttonWidth}
        onPress={onRightButtonPress}
        disabled={disabled}>
        {rightButtonText}
      </BoxButton>
    </View>
  );
};

export default MultiButton;
