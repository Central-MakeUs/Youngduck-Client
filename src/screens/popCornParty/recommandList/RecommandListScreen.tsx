import {ActivityIndicator, FlatList, RefreshControl} from 'react-native';

import DefaultContainer from '@/components/container/defaultContainer';
import PopcornItem from '@/components/items/popcornItem';
import SubTitleDescription from '@/components/title/subTitleDescription';
import {getVoteDateRange} from '@/utils/getDate';
import {useQuery} from '@tanstack/react-query';
import {getPopcornOfNextWeekData} from '@/apis/popcornParty/recommendList/recommendList';
import {TPopcornRecommendData} from '@/models/popcornParty/reponse';
import usePopcornPartyMutation from '@/hooks/mutaions/usePopcornPartyMutation';
import useRefreshing from '@/hooks/useRefresh';
import LoadingPage from '@/components/pages/loadingPage';
import EmptyItem from '@/components/items/emptyItem';

function RecommandListScreen() {
  const {startDate, endDate} = getVoteDateRange();
  const {data: popcornOfNextWeekData, isLoading} = useQuery({
    queryKey: ['popcornOfNextWeek'],
    queryFn: getPopcornOfNextWeekData,
  });
  const {onRefresh, isRefresh} = useRefreshing();
  const {voteMovieMutate} = usePopcornPartyMutation();

  const renderPopcornItem = ({item}: Record<'item', TPopcornRecommendData>) => (
    <PopcornItem
      key={item.movieTitle}
      id={item.id}
      movieTitle={item.movieTitle}
      imageUrl={item.imageUrl}
      recommendationCount={item.recommendationCount}
      recommendationReason={item.recommendationReason}
      movieDirector={item.movieDirector}
      voteMovieMutate={voteMovieMutate}
    />
  );

  if (isLoading) return <LoadingPage />;

  return (
    <DefaultContainer>
      <SubTitleDescription
        text="다음 주 팝콘작 투표"
        subTitle={`${startDate} ~ ${endDate}의 팝콘작을 선정해 주세요.\n상위 3편의 영화가 다음 주 오픈됩니다.`}
        mb={8}
      />
      {popcornOfNextWeekData?.data.length! === 0 && (
        <EmptyItem size="large" text="아직 추천 목록이 없어요" />
      )}
      {popcornOfNextWeekData?.data.length! > 0 && (
        <FlatList
          data={popcornOfNextWeekData?.data}
          renderItem={renderPopcornItem}
          keyExtractor={(item: TPopcornRecommendData) => item.id.toString()}
          refreshControl={
            <RefreshControl
              refreshing={isRefresh}
              onRefresh={() => onRefresh(['popcornOfNextWeek'])}
            />
          }
        />
      )}

      {isLoading && <ActivityIndicator style={{flex: 1}} />}
    </DefaultContainer>
  );
}

export default RecommandListScreen;
