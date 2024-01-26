import {useState} from 'react';
import {FlatList, View} from 'react-native';

import ReviewItem from '@/screens/screening/home/components/reviewItem';
import {getScreenSize} from '@/utils/getScreenSize';

import {carouselStyles} from './Carousel.style';

interface CarouselProps {
  data: any; // TODO: 백엔드 통신 응답 값에 따른 타입 지정
}
const Carousel = ({data}: CarouselProps) => {
  const dots = Array.from({length: data.length}, (_, index) => index);
  const {screenWidth} = getScreenSize();
  const [currentPage, setCurrentPage] = useState(0);

  const renderItem = ({item}: any) => <ReviewItem key={item.id} />;

  const handlePageChange = (event: any) => {
    const offset = event.nativeEvent.contentOffset.x;
    const page = Math.round(offset / screenWidth);
    setCurrentPage(page);
  };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handlePageChange}
        renderItem={renderItem}
      />

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
