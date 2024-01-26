import {View} from 'react-native';

import Carousel from '@/components/carousel';
import {IWeekScreeningData} from '@/models/screening/response';

import {reviewStyles} from './ReviewScreening.style';
interface IReviewScreeningCarouselProp {
  item: IWeekScreeningData[];
}
const ReviewScreeningCarousel = ({item}: IReviewScreeningCarouselProp) => {
  return (
    <View style={reviewStyles.container}>
      <Carousel data={item} />
    </View>
  );
};
export default ReviewScreeningCarousel;
