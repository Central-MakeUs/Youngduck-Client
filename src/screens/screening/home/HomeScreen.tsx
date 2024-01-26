import {FlatList, View} from 'react-native';
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
import useNavigator from '@/hooks/useNavigator';
import stackScreens from '@/constants/stackScreens';
import {
  getMostCommentScreening,
  getRecentScreening,
  getWeekScreening,
} from '@/apis/screening/screening';
import {IWeekScreeningData} from '@/models/screening/response';

import {screeningHomeStyle} from './HomeScreen.style';

function HomeScreen() {
  const {stackNavigation} = useNavigator();

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

  //console.log('댓글', screenings[2]?.data?.data);

  const renderItem = ({item}: {item: IWeekScreeningData}) => (
    <WeeklyScreening
      id={item.screeningId}
      date={item.screeningStartDate}
      category={item.category}
      img={item.posterImgUrl}
      hostName={item.hostName}
    />
  );

  // 작성하기 페이지로 이동
  const handleGoWriting = () => {
    stackNavigation.navigate(stackScreens.WritingScreen, {
      type: 'post',
      search: '',
    });
  };

  const handleGoScreeningList = () => {
    stackNavigation.navigate(stackScreens.ScreeningListScreen);
  };

  return (
    <DefaultScrollContainer>
      <Banner type="screening" onPress={handleGoWriting} />
      <SubTitle text="이번주 스크리닝" mt={12} mb={8} />

      <FlatList
        horizontal
        data={weekScreenings?.data?.data}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        style={{marginLeft: 16}}
      />

      <SubTitle text="반응 좋았던 스크리닝" mt={24} mb={8} />

      <ReviewScreeningCarousel />

      <Divider height={8} />

      <SubTitle text="실시간 새 소식" mt={16} mb={8} />
      <DefaultContainer>
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
      </DefaultContainer>
      <View style={screeningHomeStyle.bottom} />
    </DefaultScrollContainer>
  );
}

export default HomeScreen;
