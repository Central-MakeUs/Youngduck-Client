import {Pressable, View, TextInput as Input} from 'react-native';
import DownArrow from '@/assets/icons/down-arrow.svg';
import useFocus from '@/hooks/useFocus';
import Typography from '../typography';
import {inputStyles, inputTypes} from '@/styles/Input.style';
import palette from '@/styles/theme/color';

interface ISelectProps {
  options: string[] | string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  title: string;
}
const Select = ({
  options,
  setValue,
  value,
  placeholder,
  title,
}: ISelectProps) => {
  const {type, onFocus, onBlur} = useFocus();
  return (
    <View>
      <Typography style="Label2" mb={4} color={inputTypes[type].titleColor}>
        {title}
      </Typography>
      <Pressable
        style={[
          {borderColor: inputTypes[type].borderColor},
          inputStyles.button,
        ]}
        //onPress={showModal}
        onPressIn={() => onFocus()}
        onPressOut={() => onBlur(value)}>
        <Input
          style={[
            inputStyles.input,
            {borderColor: inputTypes[type].borderColor},
            {color: palette.Text.Normal},
          ]}
          placeholder={placeholder}
          value={value}
          editable={false}
          placeholderTextColor={palette.Text.Assistive}
        />

        <View style={inputStyles.logo}>
          <DownArrow />
        </View>
      </Pressable>
    </View>
  );
};
export default Select;
