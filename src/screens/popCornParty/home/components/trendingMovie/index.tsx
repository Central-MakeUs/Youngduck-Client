import PopcornTrendingCard from '@/components/cards/popcornTrendingCard';
import SubTitle from '@/components/title/subTitle';
import {FlatList} from 'react-native';
import {TTrendingMovieData} from '@/models/popcornParty/reponse';

const TrendingMovie = ({
  trendingMovieData,
}: Record<'trendingMovieData', TTrendingMovieData[]>) => {
  const withRankingItem = ({item}: Record<'item', TTrendingMovieData>) => (
    <PopcornTrendingCard
      movieId={item.movieId}
      movieTitle={item.movieTitle}
      imageUrl={item.imageUrl}
      rank={item.rank}
      mode="with-ranking"
    />
  );
  return (
    <>
      <SubTitle text="이번 주 독립·예술 영화 TOP 5" mt={24} mb={8} />
      <FlatList
        horizontal
        data={trendingMovieData}
        renderItem={withRankingItem}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default TrendingMovie;
