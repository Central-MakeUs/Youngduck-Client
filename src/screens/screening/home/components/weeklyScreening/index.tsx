import {Image, TouchableOpacity} from 'react-native';

import Typography from '@/components/typography';
import useNavigator from '@/hooks/useNavigator';
import palette from '@/styles/theme/color';

import {weeklyStyles} from './WeeklyScreening.style';
import {DateParsable} from 'react-native-calendar-picker';

interface IWeeklyScreeningProps {
  id: number;
  date: DateParsable;
  category: string;
  img: string;
  hostName: string;
}
const WeeklyScreening = ({
  id,
  date,
  category,
  img,
  hostName,
}: IWeeklyScreeningProps) => {
  const {stackNavigation} = useNavigator();
  const handleGoDetail = () => {
    // TODO: 상세 페이지 id param 넣어주기
    stackNavigation.navigate('DetailScreen', {id: id});
  };
  return (
    <TouchableOpacity
      style={weeklyStyles.container}
      activeOpacity={0.8}
      onPress={handleGoDetail}>
      <Image
        source={{
          uri: img,
        }}
        style={weeklyStyles.image}
      />
      <Typography style="Label3" color={palette.Text.Alternative} mt={8}>
        {category}
      </Typography>
      <Typography style="Label1">{hostName}</Typography>
      <Typography style="Chips2">{date.toString()}</Typography>
    </TouchableOpacity>
  );
};
export default WeeklyScreening;
