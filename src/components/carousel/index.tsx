import {useState} from 'react';
import {ScrollView, View} from 'react-native';

import ReviewItem from '@/screens/screening/home/components/reviewItem';
import {getScreenSize} from '@/utils/getScreenSize';
import {IWeekScreeningData} from '@/models/screening/response';

import {carouselStyles} from './Carousel.style';

interface CarouselProps {
  data: IWeekScreeningData[];
}
const Carousel = ({data}: CarouselProps) => {
  const dots = Array.from({length: data?.length}, (_, index) => index);
  const {screenWidth} = getScreenSize();
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (event: any) => {
    const offset = event.nativeEvent.contentOffset.x;
    const page = Math.round(offset / screenWidth);
    setCurrentPage(page);
  };

  return (
    <View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handlePageChange}>
        {data.map((item: IWeekScreeningData) => (
          <ReviewItem
            key={item.screeningId}
            id={item.screeningId}
            img={item.posterImgUrl}
            category={item.category}
            title={item.screeningTitle}
            startDate={item.screeningStartDate}
            endDate={item.screeningEndDate}
            chatCount={item.reviewCount}
          />
        ))}
      </ScrollView>

      <View style={carouselStyles.indicatorContainer}>
        {dots.map(i => (
          <View
            key={i}
            style={[
              carouselStyles.indicator,
              i === currentPage && carouselStyles.activeIndicator,
            ]}
          />
        ))}
      </View>
    </View>
  );
};
export default Carousel;
