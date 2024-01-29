import Banner from '@/components/banner';
import DefaultScrollContainer from '@/components/container/defaultScrollContainer';
import Divider from '@/components/divider';
import VoteNextPopcorn from './components/voteNextPopcorn';
import TrendingMovie from './components/trendingMovie';
import TrendingPopcorn from './components/trendingPopcorn';
import OtherPopcorns from './components/otherPopcorns';
import useNavigator from '@/hooks/useNavigator';
import stackScreens from '@/constants/stackScreens';
import {useQueries} from '@tanstack/react-query';
import {
  getTrendingPopcornData,
  getTrendingMovieData,
  getRandomPopcornRecommendData,
} from '@/apis/popcornParty';

function PopcornPartyHomeScreen() {
  const {stackNavigation} = useNavigator();
  const [trendingPopcornData, trendingMovieData, randomPopcornRecommendData] =
    useQueries({
      queries: [
        {queryKey: ['trendingPopcorn'], queryFn: getTrendingPopcornData},
        {queryKey: ['trendingMovieData'], queryFn: getTrendingMovieData},
        {
          queryKey: ['randomPopcornRecommendData'],
          queryFn: getRandomPopcornRecommendData,
        },
      ],
    });
  return (
    <DefaultScrollContainer>
      <Banner
        type="popcornParty"
        onPress={() =>
          stackNavigation.navigate(stackScreens.WriteRecommandScreen)
        }
      />
      <TrendingPopcorn trendingPopcornData={trendingPopcornData.data?.data!} />
      <TrendingMovie trendingMovieData={trendingMovieData.data?.data!} />
      <Divider height={8} mt={24} mb={16} />
      <VoteNextPopcorn
        randomPopcornRecommendData={randomPopcornRecommendData.data?.data!}
        title="다음 주 팝콘작 투표하기"
      />
      <OtherPopcorns />
    </DefaultScrollContainer>
  );
}

export default PopcornPartyHomeScreen;
