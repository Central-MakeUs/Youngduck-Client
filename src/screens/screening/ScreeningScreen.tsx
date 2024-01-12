import SubTitleTopBar from '@/components/topBar/subTitleTopBar';
import {FlatList, View} from 'react-native';
import WeeklyScreening from './components/weeklyScreening';

function ScreeningScreen() {
  // 이번주 스크리닝 데이터
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
    <View>
      {/*이미지 자리*/}
      <SubTitleTopBar text="이번주 스크리닝" mt={12} mb={8} />
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        contentContainerStyle={{paddingHorizontal: 20}}
      />
      <SubTitleTopBar text="관객 리뷰" mt={24} />
    </View>
  );
}

export default ScreeningScreen;
