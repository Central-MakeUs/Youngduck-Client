import {useEffect, useRef, useState} from 'react';
import {Pressable, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BottomDrawerMethods} from 'react-native-animated-bottom-drawer';
import {DateParsable} from 'react-native-calendar-picker';

import useFocus from '@/hooks/useFocus';
import Typography from '../typography';
import {inputStyles, inputTypes} from '@/styles/Input.style';
import DateRangePickerModal from '../modals/dateRangePickerModal';
import {getDateRange} from '@/utils/getDate';
import Calendar from '@/assets/icons/calendar.svg';
import palette from '@/styles/theme/color';
import BottomSheet from '../bottomSheet';

interface IDateRangeInputProps {
  title: string;
  essential: boolean;
  startDate: DateParsable | undefined;
  setStartDate: (date: Date | DateParsable | undefined) => void;
  endDate: DateParsable | undefined;
  setEndDate: (date: Date | DateParsable | undefined) => void;
  placeholder: string;
}
const DateRangeInput = ({
  title,
  essential,
  startDate,
  endDate,
  placeholder,
  setStartDate,
  setEndDate,
}: IDateRangeInputProps) => {
  const {type, onFocus, onBlur} = useFocus();
  const [timeString, setTimeString] = useState<string>('');
  const bottomDrawerRef = useRef<BottomDrawerMethods>(null);
  const {bottom} = useSafeAreaInsets();

  const [selectedStartDate, setSelectedStartDate] = useState<
    DateParsable | undefined
  >(undefined);
  const [selectedEndDate, setSelectedEndDate] = useState<
    DateParsable | undefined
  >(undefined);

  useEffect(() => {
    // 수정하는 경우 시작일, 종료일 초기화
    if (startDate && endDate) {
      setSelectedStartDate(startDate);
      setSelectedEndDate(endDate);
    }
  }, []);

  useEffect(() => {
    onBlur(timeString);
  }, [timeString]);

  useEffect(() => {
    if (selectedStartDate) {
      setStartDate(selectedStartDate);
    }
    if (selectedEndDate && bottomDrawerRef && selectedStartDate) {
      bottomDrawerRef.current?.close();
      setEndDate(selectedEndDate);
      setTimeString(getDateRange(selectedStartDate, selectedEndDate));
    }
  }, [selectedEndDate, selectedStartDate]);

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
        onPress={() => {
          bottomDrawerRef.current?.open();
        }}
        onPressIn={() => onFocus()}
        onPressOut={() => onBlur(timeString)}>
        <Typography
          style="Body1"
          color={timeString ? palette.Text.Normal : palette.Text.Assistive}>
          {timeString ? timeString : placeholder}
        </Typography>

        <Calendar />
      </Pressable>

      <BottomSheet drawerRef={bottomDrawerRef} height={310 + bottom}>
        <DateRangePickerModal
          startDate={selectedStartDate}
          endDate={selectedEndDate}
          setStartDate={setSelectedStartDate}
          setEndDate={setSelectedEndDate}
        />
      </BottomSheet>
    </View>
  );
};
export default DateRangeInput;
