import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {Image, View} from 'react-native';
import {recentStyles} from './RecentScreening.style';

const RecentScreening = () => {
  return (
    <View style={recentStyles.container}>
      <Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2017/07/13/23/11/cinema-2502213_1280.jpg',
        }}
        style={recentStyles.image}
      />
      <View style={recentStyles.content}>
        <Typography style="Label1" color={palette.Text.Normal}>
          건국대학교 영화동아리 Filmmate
        </Typography>
        <Typography style="Chips1" color={palette.Text.Alternative} mt={4}>
          2024년 1월 5일 - 2024년 1월 6일
        </Typography>
        <Typography style="Chips1" color={palette.Text.Alternative}>
          성수동 서울숲광야
        </Typography>
      </View>
    </View>
  );
};
export default RecentScreening;
