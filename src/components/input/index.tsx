import useFocus from '@/hooks/useFocus';
import {inputStyles, inputTypes} from '@/styles/Input.style';
import {useEffect} from 'react';
import {View, TextInput} from 'react-native';
import Typography from '../typography';
import palette from '@/styles/theme/color';
import DuplicatedButton from '../buttons/duplicatedButton';

interface ITextInputProps {
  value: string;
  maxLength?: number;
  title: string;
  placeholder: string;
  onChangeInput: (value: string) => void;
  content?: string;

  // 아이디 중복 체크 필요한 prop
  mode?: 'input' | 'check';
  isDuplicated?: boolean;
  setIsDuplicated?: React.Dispatch<React.SetStateAction<boolean>>;
  keyBoardType?: 'email' | 'text' | 'phone' | 'url';

  errorContent?: string;
  inputRef?: any;
  next?: () => void;
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
  setIsDuplicated,
  keyBoardType,
  errorContent,
  inputRef,
  next,
}: ITextInputProps) => {
  const {type, onFocus, onBlur, onError, onWarning} = useFocus();

  const errorMessage = errorContent
    ? errorContent
    : `${maxLength}자 이하의 ${title}을 입력해주세요`;

  useEffect(() => {
    onBlur(value);
    if (maxLength && value.length > maxLength) {
      onError();
    }
  }, [value]);

  // 중복 확인 함수
  const checkDuplicate = () => {
    // if (isDuplicated) {
    // API 요청했을 때 닉네임이 중복된다면
    // 중복된 닉네임 관련 오류 띄워주기
    //   onWarning();
    // } else {
    // 중복된 닉네임이 아니라면 해당 닉네임을 사용하고
    // isDuplicated를 false로 바꾸기
    setIsDuplicated && setIsDuplicated(false);
    // }
  };

  return (
    <View>
      <Typography style="Label2" color={inputTypes[type].titleColor} mb={4}>
        {title}
      </Typography>
      <View style={{justifyContent: 'center'}}>
        <TextInput
          style={[
            inputStyles.input,
            {
              borderColor: inputTypes[type].borderColor,
              color: palette.Text.Normal,
              //color: isDuplicated
              //  ? palette.Text.Normal
              //  : palette.Text.Alternative,
            },
          ]}
          placeholder={placeholder}
          onChangeText={onChangeInput}
          value={value}
          ref={inputRef ? inputRef : null}
          onFocus={onFocus}
          onBlur={() => {
            //focus out 일 때도 warnnig 확인
            if (maxLength && value.length > maxLength) {
              onError();
            } else {
              onBlur(value);
            }
          }}
          placeholderTextColor={palette.Text.Assistive}
          importantForAutofill="yes"
          blurOnSubmit={false}
          clearButtonMode={mode !== 'input' ? 'never' : 'while-editing'}
          editable={isDuplicated}
          textContentType="emailAddress"
          onSubmitEditing={next}
          returnKeyType="next"
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
            onPress={checkDuplicate}
          />
        )}
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

      {type === 'warning' && (
        <Typography style="Chips1" color={inputTypes[type].contentColor} mt={4}>
          중복된 닉네임은 안돼요
        </Typography>
      )}
    </View>
  );
};

export default Input;
