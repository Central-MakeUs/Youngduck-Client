import {View, TextInput, TextInputProps} from 'react-native';
import Typography from '../../typography';
import palette from '@/styles/theme/color';
import useFocus from '@/hooks/useFocus';
import {LegacyRef, useEffect} from 'react';
import {inputStyles, inputTypes} from '@/styles/Input.style';
import {textAreaStyles} from './TextArea.style';

interface ITextAreaProps extends TextInputProps {
  value: string;
  onChangeInput: (value: string) => void;
  title?: string;
  maxLength?: number;
  placeholder?: string;
  height: number;
  essential?: boolean;
  inputRef?: LegacyRef<TextInput> | undefined;
  errorContent?: string;
}

const TextArea = ({
  value,
  onChangeInput,
  title,
  maxLength,
  placeholder = '',
  height,
  essential,
  inputRef,
  errorContent = '',
  ...props
}: ITextAreaProps) => {
  const {type, onFocus, onBlur, onCheck, onError} = useFocus();

  const lengthNotice = `/ ${maxLength}`;

  useEffect(() => {
    onBlur(value);
    if (type !== 'default' && errorContent) {
      onError();
    }
  }, [value]);

  return (
    <View>
      {title && (
        <Typography
          essential={essential}
          style="Label2"
          color={inputTypes[type].titleColor}
          mb={4}>
          {title}
        </Typography>
      )}

      <TextInput
        {...props}
        style={[
          inputStyles.input,
          textAreaStyles.textArea,
          {
            height: height,
            borderColor: inputTypes[type].borderColor,
            color: palette.Text.Normal,
          },
        ]}
        value={maxLength ? value.slice(0, maxLength) : value}
        placeholder={placeholder}
        onChangeText={onChangeInput}
        onFocus={onFocus}
        maxLength={maxLength}
        blurOnSubmit={false}
        ref={inputRef}
        onBlur={() => {
          // value 유효성 체크 함수
          onCheck(value, errorContent!!);
        }}
        multiline={true}
        placeholderTextColor={palette.Text.Assistive}
      />
      {/*textArea 아래 value 길이 notice*/}
      <View style={textAreaStyles.error}>
        <View>
          {type === 'caution' && errorContent && (
            <Typography
              style="Chips1"
              color={inputTypes[type].contentColor}
              mt={4}>
              {errorContent}
            </Typography>
          )}
        </View>
        <View style={textAreaStyles.length}>
          <Typography
            style="Label3"
            color={
              type === 'caution' ? palette.State.Point : palette.Primary.Deep
            }>
            {value.length.toString()}
          </Typography>
          <Typography
            style="Label3"
            color={
              type === 'caution' ? palette.State.Point : palette.Text.Normal
            }>
            {lengthNotice}
          </Typography>
        </View>
      </View>
    </View>
  );
};
export default TextArea;
