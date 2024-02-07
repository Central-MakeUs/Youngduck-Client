import {Pressable, View} from 'react-native';
import Typography from '../typography';
import {inputStyles, inputTypes} from '@/styles/Input.style';
import useFocus from '@/hooks/useFocus';
import {useEffect, useState} from 'react';
import Time from '@/assets/icons/time.svg';
import palette from '@/styles/theme/color';
import TimePickerModal from '../modals/timePickerModal';
import {getTime} from '@/utils/getDate';

interface ITimeInputProps {
  value?: Date | undefined;
  title: string;
  essential?: boolean;
  placeholder: string;
  setValue: (value: Date) => void;
}
const TimeInput = ({
  essential,
  value,
  setValue,
  title,
  placeholder,
}: ITimeInputProps) => {
  const {type, onFocus, onBlur} = useFocus();
  const [timeModal, setTimeModal] = useState<boolean>(false);
  const [timeString, setTimeString] = useState<string>('');

  // category time 값 update
  const onConfirmTime = (date: Date) => {
    setValue(date);
    setTimeModal(false);
  };

  const onCancelTime = () => {
    setTimeModal(false);
  };

  useEffect(() => {
    // 시간 상태 저장
    onBlur(timeString);
    if (value) {
      setTimeString(getTime(value));
    }
  }, [value, timeString]);
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
          inputStyles.buntton,
          {borderColor: inputTypes[type].borderColor},
        ]}
        onPress={() => setTimeModal(!timeModal)}
        onPressIn={() => onFocus()}
        onPressOut={() => onBlur(timeString)}>
        <Typography
          style="Body1"
          color={timeString ? palette.Text.Normal : palette.Text.Assistive}>
          {timeString ? timeString : placeholder}
        </Typography>

        <Time />
      </Pressable>

      {/*시간 모달 컴포넌트*/}
      <TimePickerModal
        visible={timeModal}
        onConfirm={onConfirmTime}
        onCancel={onCancelTime}
        date={value}
      />
    </View>
  );
};
export default TimeInput;
