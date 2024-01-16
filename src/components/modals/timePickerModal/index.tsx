import {View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {dateStyles} from './TimePickerModal.style';

interface TimePickerModalProps {
  visible: boolean;
  onConfirm: (date: Date) => void; // 시간 선택 함수
  onCancel: () => void; // 모달 닫기 취소
  date: Date | undefined;
}
const TimePickerModal = ({
  visible,
  onConfirm,
  onCancel,
  date,
}: TimePickerModalProps) => {
  return (
    <View style={dateStyles.center}>
      <DateTimePickerModal
        isVisible={visible}
        mode={'time'}
        onConfirm={onConfirm}
        onCancel={onCancel}
        date={date}
      />
    </View>
  );
};
export default TimePickerModal;
