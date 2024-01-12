import SubTitleTopBar from '@/components/topBar/subTitleTopBar';
import {FlatList, View} from 'react-native';
import WeeklyScreening from './components/weeklyScreening';
import Divider from '@/components/divider';
import RecentScreening from './components/recentScreening';
import DefaultScrollContainer from '@/components/container/defaultScrollContainer';
import Button from '@/components/button';
import DefaultContainer from '@/components/container/defaultContainer';
import {screeningStyle} from './ScreeningScreen.style';
import ReviewScreening from './components/reviewScreening';

function ScreeningScreen() {
  // 이번주 스크리닝 더미 데이터
  const data = [
    {
      id: 1,
      title: 'Dromapic 상영회',
      date: '2024.01.05',
      type: '상영전',
      remain: 'D-2',
    },
    {
      id: 2,
      title: 'Dromapic 상영회',
      date: '2024.01.05',
      type: '상영전',
      remain: 'D-2',
    },
    {
      id: 3,
      title: 'Dromapic 상영회',
      date: '2024.01.05',
      type: '상영전',
      remain: 'D-2',
    },
    {
      id: 4,
      title: 'Dromapic 상영회',
      date: '2024.01.05',
      type: '상영전',
      remain: 'D-2',
    },
  ];
  const renderItem = () => <WeeklyScreening />;
  return (
    <DefaultScrollContainer>
      {/*이미지 자리*/}
      <SubTitleTopBar text="이번주 스크리닝" mt={12} mb={8} />
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 16}}
      />

      <SubTitleTopBar text="관객 리뷰" mt={24} mb={8} />
      {/*carousel 컴포넌트 활용*/}
      <ReviewScreening />

      <Divider />

      <SubTitleTopBar text="실시간 새 소식" mt={16} mb={8} />
      <DefaultContainer>
        <RecentScreening />
        <RecentScreening />
        <RecentScreening />
        {/*TODO: 목록 페이지로 이동*/}
        <Button variant="default" onPress={() => {}}>
          더보기
        </Button>
      </DefaultContainer>
      <View style={screeningStyle.bottom} />
    </DefaultScrollContainer>
  );
}

export default ScreeningScreen;
