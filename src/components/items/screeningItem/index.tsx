import {Image, TouchableOpacity, View} from 'react-native';
import {DateParsable} from 'react-native-calendar-picker';

import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import useNavigator from '@/hooks/useNavigator';
import stackScreens from '@/constants/stackScreens';
import {getKorDateRange} from '@/utils/getDate';

import {screeningItemStyles} from './ScreeningItem.style';
interface IScreeningItemProps {
  img: string;
  title: string;
  startDate: DateParsable;
  endDate: DateParsable;
  hostName: string;
  id: number;
}
const ScreeningItem = ({
  id,
  img,
  title,
  startDate,
  endDate,
  hostName,
}: IScreeningItemProps) => {
  const {stackNavigation} = useNavigator();
  const handleGoDetail = () => {
    stackNavigation.navigate(stackScreens.DetailScreen, {id: id});
  };
  return (
    <TouchableOpacity
      style={screeningItemStyles.container}
      onPress={handleGoDetail}
      activeOpacity={0.8}>
      <Image
        source={{
          uri: img,
        }}
        style={screeningItemStyles.image}
      />
      <View style={screeningItemStyles.content}>
        <Typography style="Label1">{title}</Typography>
        <Typography style="Chips1" color={palette.Text.Alternative} mt={4}>
          {getKorDateRange(startDate, endDate)}
        </Typography>
        <Typography style="Chips1" color={palette.Text.Alternative}>
          {hostName}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};
export default ScreeningItem;
