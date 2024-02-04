import {Image, TouchableOpacity} from 'react-native';
import {DateParsable} from 'react-native-calendar-picker';

import Typography from '@/components/typography';
import useNavigator from '@/hooks/useNavigator';
import palette from '@/styles/theme/color';
import {getCategory} from '@/utils/getCategory';
import {TEngCategory} from '@/models/enums/category';
import {getSimpleDate} from '@/utils/getDate';
import {useUserStore} from '@/stores/user';
import {useLoginPopupStore} from '@/stores/loginPopup';

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
  const {setLoginPopup} = useLoginPopupStore();
  const {user} = useUserStore();
  const handleGoDetail = () => {
    if (user.isLookAround) {
      setLoginPopup(true);
    } else {
      stackNavigation.navigate('DetailScreen', {id: id});
    }
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
      <Typography style="Label1">{hostName}</Typography>
      <Typography style="Chips2">{getSimpleDate(date)}</Typography>
    </TouchableOpacity>
  );
};
export default WeeklyScreening;
