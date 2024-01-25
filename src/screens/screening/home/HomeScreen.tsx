import {FlatList, View} from 'react-native';

import Divider from '@/components/divider';
import DefaultScrollContainer from '@/components/container/defaultScrollContainer';
import DefaultContainer from '@/components/container/defaultContainer';
import BoxButton from '@/components/buttons/boxButton';
import Banner from '@/components/banner';
import ReviewScreening from './components/reviewScreening';
import WeeklyScreening from './components/weeklyScreening';
import SubTitle from '@/components/title/subTitle';
import ScreeningItem from '@/components/items/screeningItem';
import useNavigator from '@/hooks/useNavigator';
import stackScreens from '@/constants/stackScreens';
import ScreeningStackScreen from '@/constants/screeningStackScreen';

import {screeningHomeStyle} from './HomeScreen.style';
function HomeScreen() {
  const {stackNavigation} = useNavigator();
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

  // 작성하기 페이지로 이동
  const handleGoWriting = () => {
    stackNavigation.navigate(stackScreens.WritingScreen, {
      type: 'post',
      search: '',
    });
  };

  const handleGoScreeningList = () => {
    stackNavigation.navigate(ScreeningStackScreen.ScreeningListScreen);
  };

  return (
    <DefaultScrollContainer>
      <Banner type="screening" onPress={handleGoWriting} />
      <SubTitle text="이번주 스크리닝" mt={12} mb={8} />

      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        style={{marginLeft: 16}}
      />
      <SubTitle text="관객 리뷰" mt={24} mb={8} />

      <ReviewScreening />

      <Divider height={8} />

      <SubTitle text="실시간 새 소식" mt={16} mb={8} />
      <DefaultContainer>
        <ScreeningItem />
        <ScreeningItem />
        <ScreeningItem />
        <BoxButton variant="default" onPress={handleGoScreeningList}>
          실시간 새 소식 더보기
        </BoxButton>
      </DefaultContainer>
      <View style={screeningHomeStyle.bottom} />
    </DefaultScrollContainer>
  );
}

export default HomeScreen;
