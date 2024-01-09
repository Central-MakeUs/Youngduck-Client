import palette from '@/styles/colors';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {IVariant} from '@/types/button';
import Typography from '../typography';

export type ButtonProps = {
  onPress: () => void;
  children: React.ReactNode | string;
  variant?: IVariant;
  disabled?: boolean;
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
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.button, styleButton[variant], disabled && styles.disabled]}
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
    width: '100%',
  },
  disabled: {
    backgroundColor: palette.Fill.Disable,
  },
});
