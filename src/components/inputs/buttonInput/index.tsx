import {View, Pressable} from 'react-native';
import {useEffect, useRef, useState} from 'react';
import {DateParsable} from 'react-native-calendar-picker';
import {BottomDrawerMethods} from 'react-native-animated-bottom-drawer';

import useFocus from '@/hooks/useFocus';
import palette from '@/styles/theme/color';
import Calendar from '@/assets/icons/calendar.svg';
import Time from '@/assets/icons/time.svg';
import Location from '@/assets/icons/location.svg';
import Search from '@/assets/icons/search.svg';
import Typography from '@/components/typography';
import TimePickerModal from '@/components/modals/timePickerModal';
import DateRangePickerModal from '@/components/modals/dateRangePickerModal';
import BottomSheet from '@/components/bottomSheet';
import SearchBottomSheet from '@/screens/popCornParty/writeRecommand/components/searchBottomSheet';
import {getDateRange, getTime} from '@/utils/getDate';

import {inputStyles, inputTypes} from '@/styles/Input.style';

interface TypeInputProps {
  value?: any; // TODO: 백엔드 통신에 따른 타입 추가 예정
  placeholder: string;
  title: string;
  essential?: boolean;
  category: 'time' | 'date' | 'location' | 'search';
  setValue: (value: any) => void; // TODO: 백엔드 통신에 따른 타입 추가 예정

  onPress?: () => void;
}

const ButtonInput = ({
  value, // 통신할  시간 value 값
  placeholder,
  title,
  essential,
  category,
  setValue,
  onPress,
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

  useEffect(() => {
    if (
      category === 'date' &&
      value.screeningStartDate &&
      value.screeningEndDate
    ) {
      setSelectedStartDate(value.screeningStartDate);
      setSelectedEndDate(value.screeningEndDate);
    }
  }, [category]);

  useEffect(() => {
    // 달력 시작일 상태 저장
    if (selectedStartDate) {
      setValue({...value, screeningStartDate: selectedStartDate});
    }
    // 달력 종료일 상태 저장 및 bottomSheet 닫기
    if (selectedEndDate && bottomDrawerRef && selectedStartDate) {
      bottomDrawerRef.current?.close();
      setValue({...value, screeningEndDate: selectedEndDate});
      setTimeString(getDateRange(selectedStartDate, selectedEndDate));
    }
  }, [category, selectedEndDate, selectedStartDate]);

  useEffect(() => {
    // 시간 상태 저장
    onBlur(category === 'date' || category === 'time' ? timeString : value);
    if (category === 'time') {
      setTimeString(getTime(value));
    }
  }, [value, timeString]);

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
  const isValueExist = category === 'date' ? value.screeningStartDate : value;
  const inputValue =
    category === 'date' || category === 'time' ? timeString : value;
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
        style={inputStyles.buntton}
        onPress={onPress ? onPress : showModal}
        onPressIn={() => onFocus()}
        onPressOut={() => onBlur(value)}>
        <Typography
          style="Body1"
          color={isValueExist ? palette.Text.Normal : palette.Text.Assistive}>
          {isValueExist ? inputValue : placeholder}
        </Typography>

        {category === 'date' && <Calendar />}
        {category === 'location' && <Location />}
        {category === 'time' && <Time />}
        {category === 'search' && <Search />}
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
        <BottomSheet drawerRef={bottomDrawerRef} height={300}>
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
