import {Pressable, View, TouchableOpacity} from 'react-native';
import ModalContainer from 'react-native-modal';
import {useEffect, useState} from 'react';

import DownArrow from '@/assets/icons/down-arrow.svg';
import TopArrow from '@/assets/icons/top-arrow.svg';
import useFocus from '@/hooks/useFocus';
import Typography from '../typography';
import palette from '@/styles/theme/color';
import {inputStyles, inputTypes} from '@/styles/Input.style';

import {selectStyles} from './Select.style';

interface ISelectProps<T = string> {
  options: T[];
  value: T;
  setValue: (value: T) => void;
  placeholder: string;
  title: string;

  essential?: boolean;
}
const Select = <T extends string>({
  options,
  setValue,
  value,
  placeholder,
  title,
  essential,
}: ISelectProps<T>) => {
  const {type, onFocus, onBlur} = useFocus();

  const [optionVisible, setOptionVisible] = useState(false);

  const showOptions = () => setOptionVisible(prev => !prev);

  useEffect(() => {
    onBlur(value);
  }, [value]);

  return (
    <View>
      <Typography
        style="Label2"
        mb={4}
        color={inputTypes[type].titleColor}
        essential={essential}>
        {title}
      </Typography>
      <Pressable
        style={[
          inputStyles.buntton,
          {borderColor: inputTypes[type].borderColor},
        ]}
        onPress={showOptions}
        onPressIn={() => onFocus()}
        onPressOut={() => onBlur(value)}>
        <Typography
          style="Body1"
          color={value ? palette.Text.Normal : palette.Text.Assistive}>
          {value ? value : placeholder}
        </Typography>
        {optionVisible && <TopArrow />}
        {!optionVisible && <DownArrow />}
      </Pressable>
      {/*select 컴포넌트 options 리스트*/}
      <ModalContainer
        isVisible={optionVisible}
        onBackdropPress={() => setOptionVisible(false)}>
        <View style={selectStyles.modal}>
          <View style={selectStyles.content}>
            {options.map(option => (
              <TouchableOpacity
                style={selectStyles.option}
                key={option}
                onPress={() => {
                  setValue(option);
                  setOptionVisible(false);
                }}>
                <Typography style="Body1" mt={16} color={palette.Text.Normal}>
                  {option}
                </Typography>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ModalContainer>
    </View>
  );
};
export default Select;
