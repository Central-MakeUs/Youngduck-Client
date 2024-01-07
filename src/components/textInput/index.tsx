import {ITextInput} from '@/types/textInput';
import {useCallback} from 'react';
import {TextInput as Input, StyleSheet} from 'react-native';

interface TextInputProps {
  input: string;
  placeholder: string;
  setInput: (value: string) => void;
  type: ITextInput;
}
const TextInput = ({input, placeholder, setInput, type}: TextInputProps) => {
  const onChangeInput = useCallback((text: string) => {
    setInput(text);
  }, []);

  const textInputStyles: Record<ITextInput, any> = {
    default: {
      borderColor: '#E6E6E5',
    },
    active: {
      borderColor: '#FFCC00',
    },
    error: {
      borderColor: '#EE2B2B',
    },
  };

  return (
    <Input
      style={StyleSheet.compose(styles.input, textInputStyles[type])}
      placeholder={placeholder}
      onChangeText={onChangeInput}
      value={input}
      importantForAutofill="yes"
      blurOnSubmit={false}
      clearButtonMode="while-editing"
      placeholderTextColor={'#C3C3C1'}
    />
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
    borderColor: '#E6E6E5',
  },
});
