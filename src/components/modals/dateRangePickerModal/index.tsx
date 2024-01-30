import {View} from 'react-native';
import CalendarPicker, {DateParsable} from 'react-native-calendar-picker';
import {dateRangleStyles} from './DateRangePickerModal.style';
import {getScreenSize} from '@/utils/getScreenSize';

interface DateRangePickerProps {
  startDate: DateParsable | undefined | Date;
  endDate: DateParsable | undefined | Date;
  setStartDate: (date: DateParsable | undefined | Date) => void;
  setEndDate: (date: DateParsable | undefined | Date) => void;
}

const DateRangePickerModal = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: DateRangePickerProps) => {
  const onDateChange = (date: Date, type: 'END_DATE' | 'START_DATE') => {
    if (type === 'END_DATE') {
      setEndDate(date);
    } else {
      setStartDate(date);
      setEndDate(undefined);
    }
  };

  const {screenWidth} = getScreenSize();

  return (
    <View style={dateRangleStyles.container}>
      <CalendarPicker
        allowRangeSelection={true}
        selectedStartDate={startDate}
        selectedEndDate={endDate}
        onDateChange={onDateChange}
        height={screenWidth - 16}
        textStyle={dateRangleStyles.text}
        selectedRangeStartStyle={dateRangleStyles.selected}
        selectedRangeEndStyle={dateRangleStyles.selected}
        selectedRangeStyle={dateRangleStyles.selectedRange}
      />
    </View>
  );
};

export default DateRangePickerModal;
