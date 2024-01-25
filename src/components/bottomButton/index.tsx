import {View} from 'react-native';

import BoxButton from '../buttons/boxButton';
import {IVariant} from '@/types/ui';

import {bottomButtonStyles} from './BottomButton.style';
interface IBottomButtonProps {
  children: string | React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
  variant?: IVariant;
}
const BottomButton = ({
  children,
  onPress,
  disabled,
  variant = 'primary',
}: IBottomButtonProps) => {
  return (
    <View style={bottomButtonStyles.container}>
      <BoxButton onPress={onPress} variant={variant} disabled={disabled}>
        {children}
      </BoxButton>
    </View>
  );
};
export default BottomButton;
