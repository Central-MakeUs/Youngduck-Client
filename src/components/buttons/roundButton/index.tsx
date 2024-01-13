import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {roundButtonStyles} from './RoundButton.style';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

export type BoxButtonProps = {
  onPress: () => void;
  children: string;
  disabled?: boolean;
  width?: string;
} & TouchableOpacityProps;

const RoundButton = ({
  children,
  disabled,
  onPress,
  ...props
}: BoxButtonProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        roundButtonStyles.button,
        disabled && roundButtonStyles.buttonDisabled,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}>
      <Typography
        style="Label1"
        color={disabled ? palette.Another.White : palette.Text.Normal}>
        {children}
      </Typography>
    </TouchableOpacity>
  );
};
export default RoundButton;
