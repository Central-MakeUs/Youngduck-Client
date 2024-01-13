import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import Typography from '../../typography';
import {IVariant} from '@/types/ui';
import palette from '@/styles/theme/color';
import {buttonStyles, styleButton} from './BoxButton.style';

export type BoxButtonProps = {
  onPress: () => void;
  children: React.ReactNode | string;
  variant?: IVariant;
  disabled?: boolean;
  width?: string;
} & TouchableOpacityProps;

const BoxButton = ({
  children,
  onPress,
  disabled = false,
  variant = 'primary',
  width = '100%',
  ...props
}: BoxButtonProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        {width: width},
        buttonStyles.button,
        styleButton[variant],
        disabled && buttonStyles.disabled,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}>
      {(() => {
        if (typeof children === 'string') {
          return (
            <Typography
              style="Label1"
              color={
                disabled
                  ? palette.Another.White
                  : styleButton[variant].textColor
              }>
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

export default BoxButton;
