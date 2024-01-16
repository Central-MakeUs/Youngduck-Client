import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {Image, TouchableOpacity, View} from 'react-native';
import {recentStyles} from './RecentScreening.style';
import useNavigator from '@/hooks/useNavigator';

const RecentScreening = () => {
  const {stackNavigation} = useNavigator();
  const handleGoDetail = () => {
    // TODO: 상세 페이지 id param 넣어주기
    stackNavigation.navigate('DetailScreen', {id: 1});
  };
  return (
    <TouchableOpacity
      style={recentStyles.container}
      onPress={handleGoDetail}
      activeOpacity={0.8}>
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
    </TouchableOpacity>
  );
};
export default RecentScreening;
