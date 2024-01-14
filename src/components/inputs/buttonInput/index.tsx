import {View, TextInput as Input, Pressable} from 'react-native';

import {inputTypes} from '@/styles/Input.style';
import useFocus from '@/hooks/useFocus';
import palette from '@/styles/theme/color';

import Calendar from '@/assets/icons/calendar.svg';
import DownArrow from '@/assets/icons/down-arrow.svg';
import Time from '@/assets/icons/time.svg';
import Location from '@/assets/icons/location.svg';

import {useState} from 'react';
import Typography from '@/components/typography';
import {buttonInputStyle} from './ButtonInput.style';

interface TypeInputProps {
  value: any;
  placeholder: string;
  title: string;
  category: 'select' | 'time' | 'date' | 'location';
  setValue: (value: any) => void;
}

const ButtonInput = ({
  value, // 통신할  시간 value 값
  placeholder,
  title,
  category,
  setValue,
}: TypeInputProps) => {
  const {type, onFocus, onBlur} = useFocus();
  const timeString = 'xvc';

  const [timeModal, setTimeModal] = useState(false);

  // 필요한 모달 열기
  const showTimeModal = () => {
    setTimeModal(true);
    console.log('클릭');
  };
  return (
    <View>
      <Typography style="Label2" mb={4} color={inputTypes[type].titleColor}>
        {title}
      </Typography>
      <Pressable
        style={[{borderColor: inputTypes[type].borderColor}]}
        onPress={showTimeModal}
        onPressIn={() => onFocus()}
        onPressOut={() => onBlur(value)}>
        <Input
          style={[
            buttonInputStyle.input,
            {borderColor: inputTypes[type].borderColor},
          ]}
          placeholder={placeholder}
          value={timeString}
          editable={false}
          placeholderTextColor={palette.Text.Assistive}
        />

        <View>
          {category === 'date' && <Calendar />}
          {category === 'location' && <Location />}
          {category === 'select' && <DownArrow />}
          {category === 'time' && <Time />}
        </View>
      </Pressable>
    </View>
  );
};
export default ButtonInput;
