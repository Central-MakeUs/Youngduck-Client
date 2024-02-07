import {useEffect} from 'react';
import {View, TextInput, TextInputProps} from 'react-native';

import useFocus from '@/hooks/useFocus';
import {inputStyles, inputTypes} from '@/styles/Input.style';
import Typography from '../typography';
import palette from '@/styles/theme/color';
import SearchButton from '../buttons/searchButton';

interface InputProps extends TextInputProps {
  value: string;
  maxLength?: number;
  title?: string;
  placeholder: string;
  onChangeInput: (value: string) => void;
  content?: string;
  onSearchPress?: () => void;
  errorContent?: string;
}

const SearchBar = ({
  value,
  title,
  placeholder,
  onChangeInput,
  maxLength,
  onSearchPress,
  errorContent,
  ...props
}: InputProps) => {
  const {type, onFocus, onBlur, onFocusout} = useFocus();

  useEffect(() => {
    onBlur(value);
    if (maxLength) {
      onFocusout(value, maxLength);
    }
  }, [value]);

  return (
    <View>
      {title && (
        <Typography style="Label2" color={inputTypes[type].titleColor} mb={4}>
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
          onFocus={onFocus}
          onBlur={() => onBlur(value)}
          placeholderTextColor={palette.Text.Assistive}
          importantForAutofill="yes"
          blurOnSubmit={false}
        />

        {<SearchButton onPress={onSearchPress!} />}
      </View>
      {type === 'caution' && errorContent && (
        <Typography style="Chips1" color={inputTypes[type].contentColor} mt={4}>
          {errorContent}
        </Typography>
      )}
    </View>
  );
};

export default SearchBar;
