import {View, TextInput as Input, Pressable} from 'react-native';

import {inputTypes} from '@/styles/Input.style';
import useFocus from '@/hooks/useFocus';
import palette from '@/styles/theme/color';

import Calendar from '@/assets/icons/calendar.svg';
import DownArrow from '@/assets/icons/down-arrow.svg';
import Time from '@/assets/icons/time.svg';
import Location from '@/assets/icons/location.svg';

import {useEffect, useState} from 'react';
import Typography from '@/components/typography';
import {buttonInputStyle} from './ButtonInput.style';
import TimePickerModal from '@/components/modals/timePickerModal';

import {getHours, getMinutes} from 'date-fns';
import DateRangePickerModal from '@/components/modals/dateRangePickerModal';
import {DateParsable} from 'react-native-calendar-picker';

interface TypeInputProps {
  value: any; // TODO: 백엔드 통신에 따른 타입 추가 예정
  placeholder: string;
  title: string;
  category: 'select' | 'time' | 'date' | 'location';
  setValue: (value: any) => void; // TODO: 백엔드 통신에 따른 타입 추가 예정
}

const ButtonInput = ({
  value, // 통신할  시간 value 값
  placeholder,
  title,
  category,
  setValue,
}: TypeInputProps) => {
  const {type, onFocus, onBlur} = useFocus();

  const [timeModal, setTimeModal] = useState(false);
  const [dateModal, setDateModal] = useState(false);

  const [selectedStartDate, setSelectedStartDate] = useState<
    DateParsable | undefined
  >(undefined);
  const [selectedEndDate, setSelectedEndDate] = useState<
    DateParsable | undefined
  >(undefined);

  let timeString;
  if (category === 'time') {
    timeString = value ? `${getHours(value)} : ${getMinutes(value)}` : '';
  }
  if (category === 'date') {
    console.log('날짜 확인하쟈', selectedEndDate, selectedStartDate);
    timeString = selectedStartDate
      ? `시작일: ${selectedStartDate}, 종료일: ${selectedEndDate}`
      : '';
  }

  useEffect(() => {
    if (selectedEndDate) {
      setDateModal(false);
    }
  }, [selectedEndDate]);

  // 필요한 모달 열기
  const showModal = () => {
    if (category === 'time') {
      setTimeModal(true);
      console.log('카테고리 시간 클릭');
    }
    if (category === 'date') {
      setDateModal(true);
    }
  };

  // category time 값 update
  const onConfirmTime = (date: Date) => {
    setValue(date);
  };

  const onCancelTime = () => {
    setTimeModal(false);
  };

  return (
    <View>
      <Typography style="Label2" mb={4} color={inputTypes[type].titleColor}>
        {title}
      </Typography>
      <Pressable
        style={[{borderColor: inputTypes[type].borderColor}]}
        onPress={showModal}
        onPressIn={() => onFocus()}
        onPressOut={() => onBlur(value)}>
        <Input
          style={[
            buttonInputStyle.input,
            {borderColor: inputTypes[type].borderColor},
            {color: palette.Text.Normal},
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
      {category === 'time' && (
        <>
          {/*시간 모달*/}
          <TimePickerModal
            visible={timeModal}
            onConfirm={onConfirmTime}
            onCancel={onCancelTime}
            date={value}
          />
        </>
      )}
      {category === 'date' && dateModal && (
        <>
          {/*캘린더 모달*/}
          <DateRangePickerModal
            startDate={selectedStartDate}
            endDate={selectedEndDate}
            setStartDate={setSelectedStartDate}
            setEndDate={setSelectedEndDate}
          />
        </>
      )}
    </View>
  );
};
export default ButtonInput;
