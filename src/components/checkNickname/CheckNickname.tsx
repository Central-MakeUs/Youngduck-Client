import {TextInput as Input, Pressable, View} from 'react-native';
import Typography from '../typography';

import useFocus from '@/hooks/useFocus';
import {useEffect} from 'react';

import palette from '@/styles/theme/color';
import {textInputStyles, textInputTypes} from '../textInput/TextInput.style';

interface TextInputProps {
  value: string;
  placeholder: string;
  onChangeInput: (value: string) => void;
  title: string;
  content: string;
  maxLength: number;
  isDuplicated: boolean;
  setIsDuplicated: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckNickname = ({
  value,
  placeholder,
  onChangeInput,
  title,
  content,
  maxLength,
  isDuplicated,
  setIsDuplicated,
}: TextInputProps) => {
  const {type, onFocus, onBlur, onError, onWarning} = useFocus();

  const errorMessage = `${maxLength}자 이하의 ${title}을 입력해주세요`;

  useEffect(() => {
    onBlur(value);
    if (value.length > maxLength) {
      onError();
      onChangeInput(value.slice(0, 11));
    }
  }, [value]);

  const checkDuplicate = () => {
    // if (isDuplicated) {
    // API 요청했을 때 닉네임이 중복된다면
    // 중복된 닉네임 관련 오류 띄워주기
    //   onWarning();
    // } else {
    // 중복된 닉네임이 아니라면 해당 닉네임을 사용하고
    // isDuplicated를 false로 바꾸기
    setIsDuplicated(false);
    // }
  };

  return (
    <View>
      <Typography style="Label2" color={textInputTypes[type].titleColor} mb={4}>
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
          editable={isDuplicated}
        />
        <Pressable
          style={{
            position: 'absolute',
            alignSelf: 'flex-end',
            paddingVertical: 2,
            paddingHorizontal: 4,
            right: 16,
            borderRadius: 4,
            backgroundColor:
              value.length >= 2 && isDuplicated
                ? palette.Primary.Assistive
                : palette.Fill.Normal,
          }}
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
      </View>
      {(() => {
        if (type === 'caution') {
          return (
            <Typography
              style="Chips1"
              color={textInputTypes[type].contentColor}
              mt={4}>
              {errorMessage}
            </Typography>
          );
        } else if (type === 'active') {
          return (
            <Typography
              style="Chips1"
              color={textInputTypes[type].contentColor}
              mt={4}>
              {content}
            </Typography>
          );
        } else if (type === 'warning') {
          return (
            <Typography
              style="Chips1"
              color={textInputTypes[type].contentColor}
              mt={4}>
              중복된 닉네임은 안돼요
            </Typography>
          );
        }
      })()}
    </View>
  );
};

export default CheckNickname;
