import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {Image, View} from 'react-native';
import {weeklyStyles} from './WeeklyScreening.style';

const WeeklyScreening = () => {
  return (
    <View style={weeklyStyles.container}>
      <Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2017/07/13/23/11/cinema-2502213_1280.jpg',
        }}
        style={weeklyStyles.image}
      />
      <View style={weeklyStyles.text}>
        <Typography style="Label4" color={palette.Another.White}>
          D-2
        </Typography>
      </View>
      <Typography style="Label3" color={palette.Text.Alternative} mt={8}>
        상영전
      </Typography>
      <Typography style="Label1" color={palette.Text.Normal}>
        Dromapic 상영회
      </Typography>
      <Typography style="Chips2">2024.01.05</Typography>
    </View>
  );
};
export default WeeklyScreening;
