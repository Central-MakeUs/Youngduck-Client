import {View} from 'react-native';
import BoxButton from '../boxButton';
import multiButtonStyles from './MultiButton.style';
import {getScreenSize} from '@/utils/getScreenSize';
import {IVariant} from '@/types/ui';

interface IMultiButtonProps {
  leftButtonText: string;
  rightButtonText: string;
  onLeftButtonPress: () => void;
  onRightButtonPress: () => void;
  disabled?: boolean;
  variant?: IVariant;
}

const MultiButton = ({
  leftButtonText,
  rightButtonText,
  onLeftButtonPress,
  onRightButtonPress,
  disabled,
  variant = 'primary',
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
        variant={variant}
        onPress={onRightButtonPress}
        disabled={disabled}>
        {rightButtonText}
      </BoxButton>
    </View>
  );
};

export default MultiButton;
