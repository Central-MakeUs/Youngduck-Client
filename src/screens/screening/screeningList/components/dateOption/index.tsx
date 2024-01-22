import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {Pressable, View} from 'react-native';
import {dateOptionStyles} from './DateOption.style';

interface IDateOptionProps {
  value: 'createdAt' | 'startDate';
  setValue: (value: 'createdAt' | 'startDate') => void;
}
const DateOption = ({value, setValue}: IDateOptionProps) => {
  return (
    <View style={dateOptionStyles.container}>
      <Pressable onPress={() => setValue('createdAt')}>
        <Typography
          style={value === 'createdAt' ? 'Label2' : 'Body2'}
          color={
            value === 'createdAt'
              ? palette.Text.Normal
              : palette.Text.Alternative
          }>
          등록순
        </Typography>
      </Pressable>
      <Typography style="Body2" color={palette.Line.Normal} ml={8} mr={8}>
        |
      </Typography>
      <Pressable onPress={() => setValue('startDate')}>
        <Typography
          style={value === 'startDate' ? 'Label2' : 'Body2'}
          color={
            value === 'startDate'
              ? palette.Text.Normal
              : palette.Text.Alternative
          }>
          날짜순
        </Typography>
      </Pressable>
    </View>
  );
};
export default DateOption;
