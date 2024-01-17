import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {roundButtonStyles} from './RoundButton.style';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

export type BoxButtonProps = {
  onPress: () => void;
  children: string | React.ReactNode;
  disabled?: boolean;
  width?: string;
  bg?: string;
  py?: number;
  px?: number;
} & TouchableOpacityProps;

const RoundButton = ({
  children,
  disabled,
  onPress,
  bg = palette.Primary.Normal,
  py = 8,
  px = 16,
  ...props
}: BoxButtonProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        roundButtonStyles.button,
        disabled && roundButtonStyles.buttonDisabled,
        {backgroundColor: bg ? bg : undefined},
        {paddingVertical: py ? py : undefined},
        {paddingHorizontal: px ? px : undefined},
      ]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}>
      {(() => {
        if (typeof children === 'string') {
          return (
            <Typography
              style="Label1"
              color={disabled ? palette.Another.White : palette.Text.Normal}>
              {children}
            </Typography>
          );
        }
        {
          return children;
        }
      })()}
    </TouchableOpacity>
  );
};
export default RoundButton;
