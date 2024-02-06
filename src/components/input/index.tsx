import {LegacyRef, useEffect} from 'react';
import {View, TextInput, TextInputProps} from 'react-native';

import useFocus from '@/hooks/useFocus';
import {inputStyles, inputTypes} from '@/styles/Input.style';
import Typography from '../typography';
import palette from '@/styles/theme/color';
import DuplicatedButton from '../buttons/duplicatedButton';
import SearchButton from '../buttons/searchButton';

interface InputProps extends TextInputProps {
  value: string;
  maxLength?: number;
  title?: string;
  placeholder: string;
  onChangeInput: (value: string) => void;
  content?: string;

  // 아이디 중복 체크 필요한 prop
  mode?: 'input' | 'check' | 'search';
  isDuplicated?: boolean;
  checkDuplicate?: () => void;
  keyBoardType?: 'email' | 'text' | 'phone' | 'url';

  // 검색 눌렀을 때 실행되는 함수
  onSearchPress?: () => void;

  errorContent?: string;
  inputRef?: LegacyRef<TextInput> | undefined;

  essential?: boolean;
}

const Input = ({
  value,
  maxLength,
  title,
  placeholder,
  onChangeInput,
  content,
  mode = 'input',
  isDuplicated = true,
  checkDuplicate,
  keyBoardType,
  errorContent,
  inputRef,
  onSearchPress,
  essential,
  ...props
}: InputProps) => {
  const {type, onFocus, onBlur, onFocusout} = useFocus();

  const errorMessage = errorContent
    ? errorContent
    : `${maxLength}자 이하의 ${title}을 입력해주세요`;

  useEffect(() => {
    onBlur(value);
    if (maxLength) {
      onFocusout(value, maxLength);
    }
  }, [value]);

  return (
    <View>
      {title && (
        <Typography
          style="Label2"
          color={inputTypes[type].titleColor}
          mb={4}
          essential={essential}>
          {title}
        </Typography>
      )}
      <View style={{justifyContent: 'center'}}>
        <TextInput
          {...props}
          style={[
            inputStyles.input,
            {borderColor: inputTypes[type].borderColor},
          ]}
          placeholder={placeholder}
          onChangeText={onChangeInput}
          value={maxLength ? value.slice(0, maxLength) : value}
          ref={inputRef ? inputRef : null}
          onFocus={onFocus}
          onBlur={() => {
            if (maxLength) {
              onFocusout(value, maxLength);
            } else {
              onFocusout(value);
            }
          }}
          placeholderTextColor={palette.Text.Assistive}
          importantForAutofill="yes"
          blurOnSubmit={false}
          clearButtonMode={mode !== 'input' ? 'never' : 'while-editing'}
          keyboardType={
            keyBoardType === 'email'
              ? 'email-address'
              : keyBoardType === 'phone'
              ? 'phone-pad'
              : keyBoardType === 'url'
              ? 'url'
              : 'default'
          }
        />
        {/*중복 확인 버튼*/}
        {mode === 'check' && (
          <DuplicatedButton
            value={value}
            isDuplicated={isDuplicated}
            onPress={checkDuplicate!}
          />
        )}
      </View>
      {/* 팝콘작 추천하기 -> 영화 검색 버튼 */}
      {mode === 'search' && <SearchButton onPress={onSearchPress!} />}

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

export default Input;
