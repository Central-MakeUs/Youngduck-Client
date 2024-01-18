import {View, TextInput, Pressable} from 'react-native';

import {inputStyles, inputTypes} from '@/styles/Input.style';
import useFocus from '@/hooks/useFocus';
import palette from '@/styles/theme/color';

import Calendar from '@/assets/icons/calendar.svg';
import Time from '@/assets/icons/time.svg';
import Location from '@/assets/icons/location.svg';
import Search from '@/assets/icons/search.svg';

import {useEffect, useRef, useState} from 'react';
import Typography from '@/components/typography';
import {buttonInputStyle} from './ButtonInput.style';
import TimePickerModal from '@/components/modals/timePickerModal';

import {format, getHours, getMinutes} from 'date-fns';
import DateRangePickerModal from '@/components/modals/dateRangePickerModal';
import {DateParsable} from 'react-native-calendar-picker';
import {BottomDrawerMethods} from 'react-native-animated-bottom-drawer';
import BottomSheet from '@/components/bottomSheet';
import SearchBottomSheet from '@/screens/popCornParty/writeRecommand/components/searchBottomSheet';

interface TypeInputProps {
  value: any; // TODO: 백엔드 통신에 따른 타입 추가 예정
  placeholder: string;
  title: string;
  essential?: boolean;
  category: 'time' | 'date' | 'location' | 'search';
  setValue: (value: any) => void; // TODO: 백엔드 통신에 따른 타입 추가 예정
}

const ButtonInput = ({
  value, // 통신할  시간 value 값
  placeholder,
  title,
  essential,
  category,
  setValue,
}: TypeInputProps) => {
  const {type, onFocus, onBlur} = useFocus();

  const [timeModal, setTimeModal] = useState(false);
  const [timeString, setTimeString] = useState<number | string | null>(null);

  const [selectedStartDate, setSelectedStartDate] = useState<
    DateParsable | undefined
  >(undefined);
  const [selectedEndDate, setSelectedEndDate] = useState<
    DateParsable | undefined
  >(undefined);

  // ui에 보여질 시간, 날짜 문자열
  useEffect(() => {
    if (category === 'time') {
      setTimeString(value ? `${getHours(value)} : ${getMinutes(value)}` : '');
    }
  }, [value]);

  useEffect(() => {
    if (selectedEndDate && bottomDrawerRef) {
      bottomDrawerRef.current?.close();
    }
    //console.log('날짜 확인하쟈', selectedEndDate, selectedStartDate);
    setTimeString(
      selectedStartDate && selectedEndDate
        ? `${format(selectedStartDate, 'yyyy-MM-dd')} ~ ${format(
            selectedEndDate,
            'yyyy-MM-dd',
          )}`
        : '',
    );
  }, [selectedEndDate]);

  // 필요한 모달 열기
  const showModal = () => {
    if (category === 'time') {
      setTimeModal(true);
    }
    if (
      (category === 'date' && bottomDrawerRef) ||
      (category === 'search' && bottomDrawerRef)
    ) {
      bottomDrawerRef.current?.open();
    }
  };

  const bottomDrawerRef = useRef<BottomDrawerMethods>(null);

  // category time 값 update
  const onConfirmTime = (date: Date) => {
    setValue(date);
    setTimeModal(false);
  };

  const onCancelTime = () => {
    setTimeModal(false);
  };

  return (
    <View>
      <Typography
        essential={essential}
        style="Label2"
        mb={4}
        color={inputTypes[type].titleColor}>
        {title}
      </Typography>
      <Pressable
        style={[
          {borderColor: inputTypes[type].borderColor},
          buttonInputStyle.button,
        ]}
        onPress={showModal}
        onPressIn={() => onFocus()}
        onPressOut={() => onBlur(value)}>
        <TextInput
          style={[
            inputStyles.input,
            {borderColor: inputTypes[type].borderColor},
            {color: palette.Text.Normal},
          ]}
          placeholder={placeholder}
          value={
            category === 'date' || category === 'time' ? timeString : value
          }
          editable={false}
          placeholderTextColor={palette.Text.Assistive}
        />

        <View style={inputStyles.logo}>
          {category === 'date' && <Calendar />}
          {category === 'location' && <Location />}
          {category === 'time' && <Time />}
          {category === 'search' && <Search />}
        </View>
      </Pressable>
      {category === 'time' && (
        <>
          {/*시간 모달 컴포넌트*/}
          <TimePickerModal
            visible={timeModal}
            onConfirm={onConfirmTime}
            onCancel={onCancelTime}
            date={value}
          />
        </>
      )}
      {/*달력 Bottom Sheet 컴포넌트*/}
      {category === 'date' && (
        <BottomSheet drawerRef={bottomDrawerRef} height={350}>
          <DateRangePickerModal
            startDate={selectedStartDate}
            endDate={selectedEndDate}
            setStartDate={setSelectedStartDate}
            setEndDate={setSelectedEndDate}
          />
        </BottomSheet>
      )}
      {/* 추천 영화 Bottom Sheet 컴포넌트 */}
      {category === 'search' && (
        <SearchBottomSheet
          setValue={setValue}
          bottomDrawerRef={bottomDrawerRef}
        />
      )}
    </View>
  );
};
export default ButtonInput;
