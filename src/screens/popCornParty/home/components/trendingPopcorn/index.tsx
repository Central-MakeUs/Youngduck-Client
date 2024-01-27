import PopcornTrendingCard from '@/components/cards/popcornTrendingCard';
import SubTitle from '@/components/title/subTitle';
import {FlatList} from 'react-native';
import {ITrendingPopcornData} from '@/models/popcornParty/reponse';

const TrendingPopcorn = ({
  trendingPopcornData,
}: Record<'trendingPopcornData', ITrendingPopcornData[]>) => {
  const withoutRankingItem = ({item}: Record<'item', ITrendingPopcornData>) => (
    <PopcornTrendingCard
      popcornId={item.popcornId}
      movieTitle={item.movieTitle}
      imageUrl={item.imageUrl}
      mode="without-ranking"
    />
  );

  return (
    <>
      <SubTitle text="이번 주 팝콘작" mt={16} mb={8} />
      <FlatList
        horizontal
        data={trendingPopcornData}
        renderItem={withoutRankingItem}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default TrendingPopcorn;
