import PopcornTrendingCard from '@/components/cards/popcornTrendingCard';
import {IPopcornTrendingCardDatas} from '@/types/popcornParty';

interface IRenderItemProp {
  item: IPopcornTrendingCardDatas;
  index: number;
}

const renderPopcornTrendingCard = () => {
  const withoutRankingItem = ({item, index}: IRenderItemProp) => (
    <PopcornTrendingCard
      id={item.id}
      title={item.title}
      imageURL={item.imageURL}
      index={index}
      mode="without-ranking"
    />
  );
  const withRankingItem = ({item, index}: IRenderItemProp) => (
    <PopcornTrendingCard
      id={item.id}
      title={item.title}
      imageURL={item.imageURL}
      index={index}
      mode="with-ranking"
    />
  );
  return {withoutRankingItem, withRankingItem};
};

export default renderPopcornTrendingCard;
