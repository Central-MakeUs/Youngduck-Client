import ReviewItem from '@/screens/screening/components/reviewItem';
import {getScreenSize} from '@/utils/getScreenSize';
import {useState} from 'react';
import {Animated, FlatList, View} from 'react-native';
import {carouselStyles} from './Carousel.style';

interface CarouselProps {
  data: any; // TODO: 백엔드 통신 응답 값에 따른 타입 지정
  type?: 'image' | 'content';
}
const Carousel = ({data, type = 'content'}: CarouselProps) => {
  const dots = Array.from({length: data.length}, (_, index) => index);
  const {screenWidth} = getScreenSize();
  const [currentPage, setCurrentPage] = useState(0);
  const scrollX = new Animated.Value(0);

  // 타입이 content 일 때 flatList 렌더링될 컴포넌트
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
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        onMomentumScrollEnd={handlePageChange}
        renderItem={renderItem}
      />

      <View
        style={[
          carouselStyles.indicatorContainer,
          type === 'image' && {marginTop: -10},
        ]}>
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
