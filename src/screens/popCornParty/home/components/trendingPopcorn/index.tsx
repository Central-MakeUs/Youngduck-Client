import PopcornTrendingCard from '@/components/cards/popcornTrendingCard';
import SubTitle from '@/components/title/subTitle';
import {
  IPopcornTrendingCardDatas,
  IRenderItemProps,
} from '@/types/popcornParty';
import {FlatList} from 'react-native';
import {popcornTrendingCardDatas} from '../../dummy';

const TrendingPopcorn = () => {
  const withoutRankingItem = ({
    item,
    index,
  }: IRenderItemProps<IPopcornTrendingCardDatas>) => (
    <PopcornTrendingCard
      id={item.id}
      title={item.title}
      imageURL={item.imageURL}
      index={index}
      mode="without-ranking"
    />
  );
  return (
    <>
      <SubTitle text="이번 주 팝콘작" mt={16} mb={8} />
      <FlatList
        horizontal
        data={popcornTrendingCardDatas}
        renderItem={withoutRankingItem}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default TrendingPopcorn;
