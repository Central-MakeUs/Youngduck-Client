import {View} from 'react-native';
import CalendarPicker, {DateParsable} from 'react-native-calendar-picker';
import {dateRangleStyles} from './DateRangePickerModal.style';

interface DateRangePickerProps {
  startDate: DateParsable | undefined;
  endDate: DateParsable | undefined;
  setStartDate: (date: DateParsable | undefined) => void;
  setEndDate: (date: DateParsable | undefined) => void;
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

  return (
    <View style={dateRangleStyles.container}>
      <CalendarPicker
        startFromMonday={true}
        allowRangeSelection={true}
        selectedStartDate={startDate}
        selectedEndDate={endDate}
        onDateChange={onDateChange}
        height={400}
        textStyle={dateRangleStyles.text}
        selectedRangeStartStyle={dateRangleStyles.selected}
        selectedRangeEndStyle={dateRangleStyles.selected}
        selectedRangeStyle={dateRangleStyles.selectedRange}
      />
    </View>
  );
};

export default DateRangePickerModal;
