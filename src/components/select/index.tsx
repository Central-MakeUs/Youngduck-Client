import {Pressable, View, TextInput, TouchableOpacity} from 'react-native';
import ModalContainer from 'react-native-modal';
import {useEffect, useState} from 'react';

import DownArrow from '@/assets/icons/down-arrow.svg';
import TopArrow from '@/assets/icons/top-arrow.svg';
import useFocus from '@/hooks/useFocus';
import Typography from '../typography';

import palette from '@/styles/theme/color';
import {inputStyles, inputTypes} from '@/styles/Input.style';
import {selectStyles} from './Select.style';

interface ISelectProps {
  options: string[];
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  title: string;

  essential?: boolean;
}
const Select = ({
  options,
  setValue,
  value,
  placeholder,
  title,
  essential,
}: ISelectProps) => {
  const {type, onFocus, onBlur} = useFocus();

  const [optionVisible, setOptionVisible] = useState(false);

  const showOptions = () => {
    setOptionVisible(prev => !prev);
  };

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
      <View>
        <Pressable
          style={[
            {borderColor: inputTypes[type].borderColor},
            inputStyles.button,
          ]}
          onPress={showOptions}
          onPressIn={() => onFocus()}
          onPressOut={() => onBlur(value)}>
          <TextInput
            style={[
              inputStyles.input,
              {borderColor: inputTypes[type].borderColor},
              {color: palette.Text.Normal},
            ]}
            onFocus={onFocus}
            placeholder={placeholder}
            value={value}
            editable={false}
            placeholderTextColor={palette.Text.Assistive}
          />
          {optionVisible && (
            <View style={inputStyles.logo}>
              <TopArrow />
            </View>
          )}
          {!optionVisible && (
            <View style={inputStyles.logo}>
              <DownArrow />
            </View>
          )}
        </Pressable>
      </View>
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
                <Typography style="Body1">{option}</Typography>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ModalContainer>
    </View>
  );
};
export default Select;
