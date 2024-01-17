import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import Typography from '../../typography';
import {CommonMarginVerticalProps, IVariant} from '@/types/ui';
import palette from '@/styles/theme/color';
import {buttonStyles, styleButton} from './BoxButton.style';

export type BoxButtonProps = {
  onPress: () => void;
  children: React.ReactNode | string;
  variant?: IVariant;
  disabled?: boolean;
  width?: string | number;
} & TouchableOpacityProps &
  CommonMarginVerticalProps;

const BoxButton = ({
  children,
  onPress,
  disabled = false,
  variant = 'primary',
  width = '100%',
  mt,
  mb,
  ...props
}: BoxButtonProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        {
          width,
          marginTop: mt ? mt : undefined,
          marginBottom: mb ? mb : undefined,
        },
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
