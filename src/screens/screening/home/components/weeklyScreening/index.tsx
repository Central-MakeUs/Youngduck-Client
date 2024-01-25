import {Image, TouchableOpacity} from 'react-native';

import Typography from '@/components/typography';
import useNavigator from '@/hooks/useNavigator';
import palette from '@/styles/theme/color';

import {weeklyStyles} from './WeeklyScreening.style';

const WeeklyScreening = () => {
  const {stackNavigation} = useNavigator();
  const handleGoDetail = () => {
    // TODO: 상세 페이지 id param 넣어주기
    stackNavigation.navigate('DetailScreen', {id: 1});
  };
  return (
    <TouchableOpacity
      style={weeklyStyles.container}
      activeOpacity={0.8}
      onPress={handleGoDetail}>
      <Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2017/07/13/23/11/cinema-2502213_1280.jpg',
        }}
        style={weeklyStyles.image}
      />
      <Typography style="Label3" color={palette.Text.Alternative} mt={8}>
        상영전
      </Typography>
      <Typography style="Label1">Dromapic 상영회</Typography>
      <Typography style="Chips2">2024.01.05</Typography>
    </TouchableOpacity>
  );
};
export default WeeklyScreening;
