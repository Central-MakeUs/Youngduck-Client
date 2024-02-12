import {LegacyRef, useEffect} from 'react';
import {View, TextInput, TextInputProps} from 'react-native';

import Typography from '../typography';
import useFocus from '@/hooks/useFocus';
import {inputStyles, inputTypes} from '@/styles/Input.style';
import palette from '@/styles/theme/color';

interface ITextInputProps extends TextInputProps {
  title: string;
  value: string;
  placeholder: string;
  setValue: (value: string) => void;
  essential?: boolean;
  maxLength?: number;
  inputRef?: LegacyRef<TextInput> | undefined;
  detail: string;

  //유효성 검증 prop
  errorContent?: string;
}

const Input = ({
  errorContent = '',
  detail,
  title,
  value,
  placeholder,
  setValue,
  essential,
  maxLength,
  inputRef,
  ...props
}: ITextInputProps) => {
  const {onFocus, onBlur, type, onCheck, onError} = useFocus();

  useEffect(() => {
    onBlur(value);
    if (errorContent && type !== 'default') {
      onError();
    }
  }, [value]);

  return (
    <>
      <Typography
        style="Label2"
        color={inputTypes[type].titleColor}
        mb={4}
        essential={essential}>
        {title}
      </Typography>

      <View style={{justifyContent: 'center'}}>
        <TextInput
          {...props}
          style={[
            inputStyles.input,
            {borderColor: inputTypes[type].borderColor},
          ]}
          value={value}
          placeholder={placeholder}
          onChangeText={setValue}
          maxLength={maxLength}
          onFocus={onFocus}
          onBlur={() => {
            // value 유효성 체크 함수
            onCheck(value, errorContent);
          }}
          placeholderTextColor={palette.Text.Assistive}
          importantForAutofill="yes"
          blurOnSubmit={false}
          ref={inputRef}
        />
      </View>

      {type === 'active' && (
        <Typography style="Chips1" color={inputTypes[type].contentColor} mt={4}>
          {detail}
        </Typography>
      )}

      {type === 'caution' && errorContent && (
        <Typography style="Chips1" color={inputTypes[type].contentColor} mt={4}>
          {errorContent}
        </Typography>
      )}
    </>
  );
};
export default Input;
