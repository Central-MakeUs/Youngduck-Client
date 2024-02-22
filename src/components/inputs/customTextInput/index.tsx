import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {useState} from 'react';
import {TextInput, View} from 'react-native';
import customTextInputStyles from './CustomTextInput.style';

interface ICustomTextInputProps {
  title?: string;
  value: string;
  placeholder: string;
  maxLength?: number;
  isError?: boolean;
  noticeMessage?: string;
  children?: React.ReactNode;
  onChangeText: (e: string) => void;
  onSubmitEditing?: () => void;
}

const CustomTextInput = ({
  title,
  value,
  placeholder,
  maxLength,
  isError,
  noticeMessage,
  children,
  onChangeText,
  onSubmitEditing,
}: ICustomTextInputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const type = isError ? 'error' : isFocused ? 'focused' : 'default';
  return (
    <>
      {title && (
        <Typography
          style="Label2"
          mb={4}
          color={customTextInputStyles[type].color}>
          {title}
        </Typography>
      )}
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
          onSubmitEditing={onSubmitEditing}
          returnKeyType={onSubmitEditing && 'search'}
          allowFontScaling={false}
          maxLength={maxLength}
        />
        {children}
      </View>
      {isError && (
        <Typography style="Chips1" mt={8} color={palette.State.Point}>
          {noticeMessage!}
        </Typography>
      )}
    </>
  );
};

export default CustomTextInput;
