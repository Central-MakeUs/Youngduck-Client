import {TextInput as Input, View} from 'react-native';
import Typography from '../typography';

import useFocus from '@/hooks/useFocus';
import {useEffect} from 'react';

import palette from '@/styles/theme/color';
import {textInputStyles} from './TextInput.style';
import {inputTypes} from '@/styles/Input.style';

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
      <Typography style="Label2" color={inputTypes[type].titleColor} mb={4}>
        {title}
      </Typography>
      <View style={{justifyContent: 'center'}}>
        <Input
          style={[
            textInputStyles.input,
            {
              borderColor: textInputTypes[type].borderColor,
              color: isDuplicated
                ? palette.Text.Normal
                : palette.Text.Alternative,
            },
          ]}
          placeholder={placeholder}
          onChangeText={onChangeInput}
          value={value}
          onFocus={onFocus}
          onBlur={() => onBlur(value)}
          importantForAutofill="yes"
          blurOnSubmit={false}
          placeholderTextColor={palette.Text.Assistive}
          clearButtonMode={mode !== 'input' ? 'never' : 'while-editing'}
          editable={isDuplicated}
        />
        {mode === 'check' && (
          <Pressable
            style={
              value.length >= 2 && isDuplicated
                ? textInputStyles.activated
                : textInputStyles.deActivated
            }
            onPress={checkDuplicate}>
            <Typography
              style="Chips2"
              color={
                value.length >= 2 && isDuplicated
                  ? palette.Primary.Deep
                  : palette.Text.Alternative
              }>
              중복확인
            </Typography>
          </Pressable>
        )}
      </View>
      {(() => {
        if (type === 'caution') {
          return (
            <Typography
              style="Chips1"
              color={inputTypes[type].contentColor}
              mt={4}>
              {errorMessage}
            </Typography>
          );
        } else if (type === 'active') {
          return (
            <Typography
              style="Chips1"
              color={inputTypes[type].contentColor}
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
