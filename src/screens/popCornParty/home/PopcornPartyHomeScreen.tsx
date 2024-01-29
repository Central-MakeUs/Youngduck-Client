import Banner from '@/components/banner';
import DefaultScrollContainer from '@/components/container/defaultScrollContainer';
import Divider from '@/components/divider';
import VoteNextPopcorn from './components/voteNextPopcorn';
import TrendingMovie from './components/trendingMovie';
import TrendingPopcorn from './components/trendingPopcorn';
import OtherPopcorns from './components/otherPopcorns';
import useNavigator from '@/hooks/useNavigator';
import stackScreens from '@/constants/stackScreens';
import {useQueries, useQueryClient} from '@tanstack/react-query';
import {
  getTrendingPopcornData,
  getTrendingMovieData,
  getPopcornRecommendData,
} from '@/apis/popcornParty';
import {useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import useVoteMovieMutation from '@/hooks/mutaions/useRecommendMovie';

function PopcornPartyHomeScreen() {
  const {stackNavigation} = useNavigator();
  const currentFocusState = useIsFocused();
  const queryClient = useQueryClient();
  const {voteMovieMutate} = useVoteMovieMutation();

  const [trendingPopcornData, trendingMovieData, randomPopcornRecommendData] =
    useQueries({
      queries: [
        {queryKey: ['trendingPopcorn'], queryFn: getTrendingPopcornData},
        {queryKey: ['trendingMovieData'], queryFn: getTrendingMovieData},
        {
          queryKey: ['randomPopcornRecommendData'],
          queryFn: getPopcornRecommendData,
        },
      ],
    });

  useEffect(() => {
    if (currentFocusState && randomPopcornRecommendData.status === 'success') {
      queryClient.removeQueries({queryKey: ['randomPopcornRecommendData']});
      randomPopcornRecommendData.refetch();
    }
  }, [currentFocusState]);

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
        popcornRecommendData={randomPopcornRecommendData.data?.data!}
        title="다음 주 팝콘작 투표하기"
        isLoading={randomPopcornRecommendData.isLoading}
        voteMovieMutate={voteMovieMutate}
      />
      <OtherPopcorns />
    </DefaultScrollContainer>
  );
}

export default PopcornPartyHomeScreen;
