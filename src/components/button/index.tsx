import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import Typography from '../typography';
import {IVariant} from '@/types/ui';
import palette from '@/styles/theme/color';

export type ButtonProps = {
  onPress: () => void;
  children: React.ReactNode | string;
  variant?: IVariant;
  disabled?: boolean;
  width?: string;
} & TouchableOpacityProps;

export type ButtonStyle = {
  backgroundColor: string;
  textColor: string;
};

const styleButton: Record<IVariant, ButtonStyle> = {
  primary: {
    backgroundColor: palette.Primary.Normal,
    textColor: palette.Text.Normal,
  },
  secondary: {
    backgroundColor: palette.Primary.Alternative,
    textColor: palette.Primary.Dark,
  },
  default: {
    backgroundColor: palette.Fill.Strong,
    textColor: palette.Text.Normal,
  },
};

export const Button = ({
  children,
  onPress,
  disabled = false,
  variant = 'primary',
  width = '100%',
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        {width: width},
        styles.button,
        styleButton[variant],
        disabled && styles.disabled,
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
        } else {
          return children;
        }
      })()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  disabled: {
    backgroundColor: palette.Fill.Disable,
  },
});
