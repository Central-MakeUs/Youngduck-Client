import useFocus from '@/hooks/useFocus';
import {inputStyles, inputTypes} from '@/styles/Input.style';
import {useEffect} from 'react';
import {View, TextInput as Input} from 'react-native';
import Typography from '../typography';
import palette from '@/styles/theme/color';

interface ITextInputProps {
  value: string;
  maxLength?: number;
  title: string;
  placeholder: string;
  onChangeInput: (value: string) => void;
  content?: string;
}
const TextInput = ({
  value,
  maxLength,
  title,
  placeholder,
  onChangeInput,
  content,
}: ITextInputProps) => {
  const {type, onFocus, onBlur, onError, onWarning} = useFocus();

  console.log(type);

  const errorMessage = `${maxLength}자 이하의 ${title}을 입력해주세요`;

  useEffect(() => {
    onBlur(value);
    if (maxLength && value.length > maxLength) {
      onError();
    }
  }, [value]);

  return (
    <View>
      <Typography style="Label2" color={inputTypes[type].titleColor} mb={4}>
        {title}
      </Typography>
      <View style={{justifyContent: 'center'}}>
        <Input
          style={[
            inputStyles.input,
            {
              borderColor: inputTypes[type].borderColor,
              color: palette.Text.Normal,
            },
          ]}
          placeholder={placeholder}
          onChangeText={onChangeInput}
          value={value}
          onFocus={onFocus}
          onBlur={() => {
            if (maxLength && value.length > maxLength) {
              onError();
            } else {
              onBlur(value);
            }
          }}
          placeholderTextColor={palette.Text.Assistive}
        />
      </View>
      {content && type === 'active' && (
        <Typography style="Chips1" color={inputTypes[type].contentColor} mt={4}>
          {content}
        </Typography>
      )}
      {maxLength && type === 'caution' && (
        <Typography style="Chips1" color={inputTypes[type].contentColor} mt={4}>
          {errorMessage}
        </Typography>
      )}
    </View>
  );
};
export default TextInput;
