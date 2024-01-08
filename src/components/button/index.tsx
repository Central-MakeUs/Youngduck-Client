import {IVariant} from '@/types/button';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export type ButtonProps = {
  onPress: () => void;
  text: string;
  //textColor?: string;
  // 버튼 모양
  variant?: IVariant;
  disabled?: boolean;
};

export type ButtonStyle = {
  backgroundColor: string;
  borderWidth?: number;
  borderColor?: string;
};

const styleButton: Record<IVariant, ButtonStyle> = {
  fill: {
    backgroundColor: '#FFCC00',
  },
  line: {
    borderWidth: 1,
    borderColor: '#FFCC00',
    backgroundColor: 'white',
  },
  default: {
    backgroundColor: '#EBEBEA',
  },
};

export const Button = ({
  text,
  onPress,
  variant = 'fill',
  disabled = false,
}: ButtonProps) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={
        disabled
          ? StyleSheet.compose(styles.button, styles.disabled)
          : StyleSheet.compose(styles.button, styleButton[variant])
      }
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}>
      <Text>{text}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingHorizontal: 16,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  disabled: {
    backgroundColor: 'none',
    borderWidth: 1,
    borderColor: '#D1D1D1',
  },
});
