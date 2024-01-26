import {Image, TouchableOpacity, View} from 'react-native';

import Typography from '@/components/typography';
import ChatIcon from '@/assets/icons/chat.svg';
import useNavigator from '@/hooks/useNavigator';
import palette from '@/styles/theme/color';
import stackScreens from '@/constants/stackScreens';

import {reviewItemStyles} from './ReviewItem.style';

const ReviewItem = () => {
  const {stackNavigation} = useNavigator();
  const handleGoDetail = () => {
    // TODO: 상세 페이지 id param 넣어주기
    stackNavigation.navigate(stackScreens.DetailScreen, {id: 1});
  };
  return (
    <TouchableOpacity
      style={reviewItemStyles.container}
      activeOpacity={0.8}
      onPress={handleGoDetail}>
      <Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2017/07/13/23/11/cinema-2502213_1280.jpg',
        }}
        style={reviewItemStyles.image}
      />
      <View style={reviewItemStyles.content}>
        <Typography style="Label2">영화제</Typography>
        <Typography style="Body1" mb={8}>
          부산영화제
        </Typography>
        <View style={reviewItemStyles.option}>
          <Typography style="Body2" color={palette.Text.Alternative}>
            2024.01.05 - 2024.01.06
          </Typography>
          <View style={reviewItemStyles.flex}>
            <ChatIcon />
            <Typography style="Body2" color={palette.Text.Alternative} ml={7}>
              2
            </Typography>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ReviewItem;
