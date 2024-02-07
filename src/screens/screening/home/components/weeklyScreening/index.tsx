import {Image, TouchableOpacity, View} from 'react-native';
import {DateParsable} from 'react-native-calendar-picker';

import Typography from '@/components/typography';
import useNavigator from '@/hooks/useNavigator';
import palette from '@/styles/theme/color';
import {getCategory} from '@/utils/getCategory';
import {TEngCategory} from '@/models/enums/category';
import {getSimpleDate} from '@/utils/getDate';
import useCheckLogin from '@/hooks/useCheckLogin';

import {weeklyStyles} from './WeeklyScreening.style';

interface IWeeklyScreeningProps {
  id: number;
  date: DateParsable;
  category: TEngCategory;
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
  const {checkLogin} = useCheckLogin();

  const handleGoDetail = () => {
    checkLogin(() => {
      stackNavigation.navigate('DetailScreen', {id: id});
    });
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
        {getCategory(category)}
      </Typography>
      <View style={weeklyStyles.content}>
        <Typography style="Label1" numberOfLines={1}>
          {hostName}
        </Typography>
      </View>
      <Typography style="Chips2" color={palette.Text.Alternative}>
        {getSimpleDate(date)}
      </Typography>
    </TouchableOpacity>
  );
};
export default WeeklyScreening;
