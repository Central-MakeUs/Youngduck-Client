import {Image, View} from 'react-native';
import {reviewItemStyles} from './ReviewItem.style';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import Chip from '@/components/chip';

const ReviewItem = () => {
  const reviews = ['재밌어요', '멋있어요'];
  return (
    <View style={reviewItemStyles.container}>
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
            <Chip text={r} />
          ))}
        </View>
      </View>
    </View>
  );
};
export default ReviewItem;
