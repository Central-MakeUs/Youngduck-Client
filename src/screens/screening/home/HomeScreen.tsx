import {ScrollView, View} from 'react-native';
import {useQueries} from '@tanstack/react-query';

import Divider from '@/components/divider';
import DefaultScrollContainer from '@/components/container/defaultScrollContainer';
import DefaultContainer from '@/components/container/defaultContainer';
import BoxButton from '@/components/buttons/boxButton';
import Banner from '@/components/banner';
import WeeklyScreening from './components/weeklyScreening';
import ReviewScreeningCarousel from './components/reviewScreeningCarousel';
import SubTitle from '@/components/title/subTitle';
import ScreeningItem from '@/components/items/screeningItem';
import EmptyItem from '@/components/items/emptyItem';
import useNavigator from '@/hooks/useNavigator';
import stackScreens from '@/constants/stackScreens';
import {
  getMostCommentScreening,
  getRecentScreening,
  getWeekScreening,
} from '@/apis/screening/screening';
import {IWeekScreeningData} from '@/models/screening/response/screeningResponseDto';
import EmptyCard from '@/components/cards/emptyCard';
import LoadingPage from '@/components/pages/loadingPage';
import useCheckLogin from '@/hooks/useCheckLogin';

import {screeningHomeStyle} from './HomeScreen.style';

function HomeScreen() {
  const {stackNavigation} = useNavigator();
  const {checkLogin} = useCheckLogin();

  const [weekScreenings, recentScreenings, mostCommentScreenings] = useQueries({
    queries: [
      // 이번주 스크리닝 api
      {queryKey: ['weekScreening'], queryFn: getWeekScreening},
      // 실시간 스크리닝 api
      {
        queryKey: ['recentScreening'],
        queryFn: getRecentScreening,
      },
      // 반응 좋았던 스크리닝 api
      {
        queryKey: ['mostCommentScreening'],
        queryFn: getMostCommentScreening,
      },
    ],
  });

  if (
    weekScreenings.isLoading ||
    recentScreenings.isLoading ||
    mostCommentScreenings.isLoading
  ) {
    return <LoadingPage />;
  }

  // 작성하기 페이지로 이동
  const handleGoWriting = () => {
    checkLogin(() => {
      stackNavigation.navigate(stackScreens.WritingScreen, {
        type: 'post',
        search: '',
      });
    });
  };

  const handleGoScreeningList = () => {
    stackNavigation.navigate(stackScreens.ScreeningListScreen);
  };

  return (
    <DefaultScrollContainer
      queryKey={['weekScreening', 'recentScreening', 'mostCommentScreening']}>
      <Banner type="screening" onPress={handleGoWriting} />
      <SubTitle text="이번주 스크리닝" mt={12} />
      {weekScreenings.data?.data.length === 0 ? (
        <EmptyItem text="이번주 스크리닝은 준비하고 있어요" />
      ) : (
        <View style={screeningHomeStyle.content}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {weekScreenings?.data?.data?.map((item: IWeekScreeningData) => (
              <WeeklyScreening
                key={item.screeningId}
                id={item.screeningId}
                date={item.screeningStartDate}
                category={item.category}
                img={item.posterImgUrl}
                hostName={item.screeningTitle}
              />
            ))}
          </ScrollView>
        </View>
      )}

      <SubTitle text="반응 좋았던 스크리닝" mb={8} />
      <View style={screeningHomeStyle.recent}>
        {mostCommentScreenings.data?.data.length === 0 ? (
          <EmptyCard text={`최근에 방영했던 스크리닝은\n준비하고 있어요`} />
        ) : (
          <ReviewScreeningCarousel item={mostCommentScreenings?.data?.data!} />
        )}
      </View>
      <Divider height={8} />

      <SubTitle text="실시간 새 소식" mt={16} />
      <DefaultContainer>
        {recentScreenings.data?.data.length === 0 ? (
          <EmptyItem text="실시간 새 소식은 준비하고 있어요" />
        ) : (
          <View style={screeningHomeStyle.margin}>
            {recentScreenings?.data?.data.map(screening => (
              <ScreeningItem
                key={screening.screeningId}
                img={screening.posterImgUrl}
                title={screening.screeningTitle}
                startDate={screening.screeningStartDate}
                endDate={screening.screeningEndDate}
                hostName={screening.hostName}
                id={screening.screeningId}
              />
            ))}
            <BoxButton variant="default" onPress={handleGoScreeningList}>
              실시간 새 소식 더보기
            </BoxButton>
          </View>
        )}
      </DefaultContainer>
      <View style={screeningHomeStyle.bottom} />
    </DefaultScrollContainer>
  );
}

export default HomeScreen;
