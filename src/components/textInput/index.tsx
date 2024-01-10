import {TextInput as Input, View} from 'react-native';
import Typography from '../typography';

import useFocus from '@/hooks/useFocus';
import {useEffect} from 'react';

import palette from '@/styles/theme/color';
import {styles, textInputStyles} from './TextInput.style';

interface TextInputProps {
  value: string;
  placeholder: string;
  onChangeInput: (value: string) => void;
  title: string;
  content: string;
  maxLength: number;
}

const TextInput = ({
  value,
  placeholder,
  onChangeInput,
  title,
  content,
  maxLength,
}: TextInputProps) => {
  const {type, onFocus, onBlur, onError} = useFocus();

  const errorMessage = `${maxLength}자 이하의 ${title}을 입력해주세요`;

  useEffect(() => {
    onBlur(value);
    if (value.length > maxLength) {
      onError();
    }
  }, [value]);

  return (
    <View>
      <Typography
        style="Label2"
        color={textInputStyles[type].titleColor}
        mb={4}>
        {title}
      </Typography>
      <Input
        style={[styles.input, {borderColor: textInputStyles[type].borderColor}]}
        placeholder={placeholder}
        onChangeText={onChangeInput}
        value={value}
        onFocus={() => onFocus()}
        onBlur={() => onBlur(value)}
        importantForAutofill="yes"
        blurOnSubmit={false}
        clearButtonMode="while-editing"
        placeholderTextColor={palette.Text.Assistive}
      />
      {(() => {
        if (type === 'caution') {
          return (
            <Typography
              style="Chips1"
              color={textInputStyles[type].contentColor}
              mt={4}>
              {errorMessage}
            </Typography>
          );
        } else if (type === 'active') {
          return (
            <Typography
              style="Chips1"
              color={textInputStyles[type].contentColor}
              mt={4}>
              {content}
            </Typography>
          );
        }
      })()}
    </View>
  );
};

export default TextInput;
