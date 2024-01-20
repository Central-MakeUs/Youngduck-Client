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
  title: string;
  maxLength?: number;
  placeholder: string;
  height: number;
  essential?: boolean;

  inputRef?: LegacyRef<TextInput> | undefined;
}

const TextArea = ({
  value,
  onChangeInput,
  title,
  maxLength,
  placeholder,
  height,
  essential,
  inputRef,
  ...props
}: ITextAreaProps) => {
  const {type, onFocus, onBlur, onFocusout} = useFocus();

  const lengthNotice = `/ ${maxLength}`;

  useEffect(() => {
    onBlur(value);
    if (maxLength) {
      onFocusout(value, maxLength);
    }
  }, [value]);

  return (
    <View>
      <Typography
        essential={essential}
        style="Label2"
        color={inputTypes[type].titleColor}
        mb={4}>
        {title}
      </Typography>
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
        blurOnSubmit={false}
        ref={inputRef}
        onBlur={() => {
          //focus out 일 때도 warnnig 확인
          if (maxLength) onFocusout(value, maxLength);
        }}
        multiline={true}
        placeholderTextColor={palette.Text.Assistive}
      />
      {/*textArea 아래 value 길이 notice*/}
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
  );
};
export default TextArea;
