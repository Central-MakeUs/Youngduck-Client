import {View} from 'react-native';

import BoxButton from '../../buttons/boxButton';
import {IVariant} from '@/types/ui';

import {bottomButtonStyles} from './BottomBoxButton.style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
interface IBottomButtonProps {
  children: string | React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
  variant?: IVariant;
}
const BottomBoxButton = ({
  children,
  onPress,
  disabled,
  variant = 'primary',
}: IBottomButtonProps) => {
  const {bottom} = useSafeAreaInsets();
  const style = bottomButtonStyles({bottom});
  return (
    <View style={style.container}>
      <BoxButton onPress={onPress} variant={variant} disabled={disabled}>
        {children}
      </BoxButton>
    </View>
  );
};
export default BottomBoxButton;
