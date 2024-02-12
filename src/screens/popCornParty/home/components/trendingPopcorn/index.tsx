import PopcornTrendingCard from '@/components/cards/popcornTrendingCard';
import SubTitle from '@/components/title/subTitle';
import {FlatList} from 'react-native';
import {TTrendingPopcornData} from '@/models/popcornParty/reponse';
import EmptyItem from '@/components/items/emptyItem';

const TrendingPopcorn = ({
  trendingPopcornData,
}: Record<'trendingPopcornData', TTrendingPopcornData[]>) => {
  const withoutRankingItem = ({item}: Record<'item', TTrendingPopcornData>) => (
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
      {trendingPopcornData.length === 0 && (
        <EmptyItem text="아직 업데이트 중이에요" />
      )}
      {trendingPopcornData.length > 0 && (
        <FlatList
          horizontal
          data={trendingPopcornData}
          renderItem={withoutRankingItem}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </>
  );
};

export default TrendingPopcorn;
