import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {useState} from 'react';
import {TextInput, View} from 'react-native';
import customTextInputStyles from './CustomTextInput.style';

interface ICustomTextInputProps {
  title: string;
  value: string;
  onChangeText: (e: string) => void;
  placeholder: string;
  isError?: boolean;
  errorMessage?: string;
  children?: React.ReactNode;
}

const CustomTextInput = ({
  title,
  value,
  onChangeText,
  placeholder,
  isError,
  errorMessage,
  children,
}: ICustomTextInputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const type = isError ? 'error' : isFocused ? 'focused' : 'default';
  return (
    <>
      <Typography
        style="Label2"
        mb={4}
        color={customTextInputStyles[type].color}>
        {title}
      </Typography>
      <View style={{justifyContent: 'center'}}>
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          style={[
            customTextInputStyles.input,
            {borderColor: customTextInputStyles[type].borderColor},
          ]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholderTextColor={palette.Text.Assistive}
        />
        {children}
      </View>
      {isError && (
        <Typography style="Chips1" mt={8} color={palette.State.Point}>
          {errorMessage!}
        </Typography>
      )}
    </>
  );
};

export default CustomTextInput;
