import CategoryInput from '@/components/categoryInput';
import DateRangePickerModal from '@/components/modals/dateRangePickerModal';
import {DateParsable} from '@/types/ui';
import {useState} from 'react';
import {View} from 'react-native';

interface ScreeningDateProps {
  startDate: DateParsable | null;
  endDate: DateParsable | null;
  setStartDate: (date: DateParsable) => void;
  setEndDate: (date: DateParsable) => void;
}
const ScreeningDate = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: ScreeningDateProps) => {
  const [dateModal, setDateModal] = useState<boolean>(false);
  const handleDatePickerClick = () => {
    setDateModal(true);
  };

  const dateString = endDate ? `${startDate} ~ ${endDate}` : null;
  return (
    <View>
      <CategoryInput
        title="날짜"
        placeholder="날짜 선택하기"
        category="date"
        value={dateString}
        onPress={handleDatePickerClick}
      />
      {dateModal && (
        <DateRangePickerModal
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      )}
    </View>
  );
};
export default ScreeningDate;
