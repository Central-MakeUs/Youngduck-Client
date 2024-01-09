import {TextInput as Input, StyleSheet, View} from 'react-native';
import Typography from '../typography';
import palette from '@/styles/colors';
import {ITextInputTypes} from '@/types/textInput';
import useFocus from '@/hooks/useFocus';
import {useEffect} from 'react';

interface TextInputProps {
  value: string;
  placeholder: string;
  onChangeInput: (value: string) => void;
  title: string;
  content: string;
  maxLength: number;
}

interface TextInputStyle {
  borderColor: string;
  titleColor?: string;
  contentColor?: string;
}

const textInputStyles: Record<ITextInputTypes, TextInputStyle> = {
  default: {
    borderColor: palette.Line.Normal,
    titleColor: palette.Text.Alternative,
    contentColor: palette.Text.Alternative,
  },
  writed: {
    borderColor: palette.Line.Normal,
    titleColor: palette.Text.Strong,
    contentColor: palette.Text.Alternative,
  },
  caution: {
    borderColor: palette.State.Point,
    titleColor: palette.State.Point,
    contentColor: palette.State.Point,
  },
  active: {
    borderColor: palette.Primary.Normal,
    titleColor: palette.Text.Strong,
    contentColor: palette.Text.Alternative,
  },
};

const TextInput = ({
  value,
  placeholder,
  onChangeInput,
  title,
  content,
  maxLength,
}: TextInputProps) => {
  const {type, onFocus, onBlur, onError} = useFocus();

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
      <Typography
        style="Chips1"
        color={textInputStyles[type].contentColor}
        mt={4}>
        {content}
      </Typography>
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
