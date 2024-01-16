import {Image, TouchableOpacity, View} from 'react-native';
import {reviewItemStyles} from './ReviewItem.style';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import Chip from '@/components/chip';
import DefaultContainer from '@/components/container/defaultContainer';
import useNavigator from '@/hooks/useNavigator';

const ReviewItem = () => {
  const {stackNavigation} = useNavigator();
  const reviews = ['재밌어요', '멋있어요'];
  const handleGoDetail = () => {
    // TODO: 상세 페이지 id param 넣어주기
    stackNavigation.navigate('DetailScreen', {id: 1});
  };
  return (
    <DefaultContainer>
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
        <View>
          <Typography style="Label2" color={palette.Text.Normal}>
            영화제
          </Typography>
          <Typography style="Body1" color={palette.Text.Normal} mb={8}>
            부산영화제
          </Typography>
          <View style={reviewItemStyles.content}>
            {reviews.map((r: string) => (
              <Chip text={r} key={r} />
            ))}
          </View>
        </View>
      </TouchableOpacity>
    </DefaultContainer>
  );
};
export default ReviewItem;
