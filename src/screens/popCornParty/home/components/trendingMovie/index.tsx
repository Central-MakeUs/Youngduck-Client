import PopcornTrendingCard from '@/components/cards/popcornTrendingCard';
import SubTitle from '@/components/title/subTitle';
import {
  IPopcornTrendingCardDatas,
  IRenderItemProps,
} from '@/types/popcornParty';
import {FlatList} from 'react-native';
import {popcornTrendingCardDatas} from '../../dummy';

const TrendingMovie = () => {
  const withRankingItem = ({
    item,
    index,
  }: IRenderItemProps<IPopcornTrendingCardDatas>) => (
    <PopcornTrendingCard
      id={item.id}
      title={item.title}
      imageURL={item.imageURL}
      index={index}
      mode="with-ranking"
    />
  );
  return (
    <>
      <SubTitle text="이번 주 독립·예술 영화 TOP 5" mt={24} mb={8} />
      <FlatList
        horizontal
        data={popcornTrendingCardDatas}
        renderItem={withRankingItem}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default TrendingMovie;
