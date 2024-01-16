import CategoryInput from '@/components/categoryInput';
import TimePickerModal from '@/components/modals/timePickerModal';
import {useState} from 'react';
import {View} from 'react-native';
import {getHours, getMinutes} from 'date-fns';

interface ScreeningTimeProps {
  time: undefined | Date;
  setTime: (value: Date | undefined) => void;
}
const ScreeningTime = ({time, setTime}: ScreeningTimeProps) => {
  const [timeModal, setTimeModal] = useState<boolean>(false);

  const timeString = time ? `${getHours(time)}시 ${getMinutes(time)}분` : null;

  const closeTimePicker = () => {
    setTimeModal(false);
  };

  const confirmTimePicker = (date: Date) => {
    setTime(date);
    closeTimePicker();
  };

  const handleTimePickerClick = () => {
    console.log('클릭');
    setTimeModal(true);
    console.log('value 값', time);
  };

  return (
    <View>
      <CategoryInput
        title="시간"
        placeholder="시간 선택하기"
        category="time"
        value={timeString}
        onPress={handleTimePickerClick}
      />
      <TimePickerModal
        visible={timeModal}
        onConfirm={confirmTimePicker}
        onCancel={closeTimePicker}
        date={time}
      />
    </View>
  );
};
export default ScreeningTime;
