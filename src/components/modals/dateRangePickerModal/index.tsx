import {View} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import {dateRangleStyles} from './DateRangePickerModal.style';

type DateParsable = any; // react-native-calendar-picker 패키지에 내장된 타입이 없음

interface DateRangePickerProps {
  startDate: DateParsable | null;
  endDate: DateParsable | null;
  setStartDate: (date: DateParsable | null) => void;
  setEndDate: (date: DateParsable | null) => void;
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
      setEndDate(null);
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
