import BackTitleTopBar from '@/components/topBar/backTitleTopBar';
import CancelTopBar from '@/components/topBar/cancelTopBar';
import TitleTopBar from '@/components/topBar/titleTopBar';
import ScreeningStackScreen from '@/constants/screeningStackScreen';
import useNavigator from '@/hooks/useNavigator';
import DetailScreen from '@/screens/screening/detail/DetailScreen';
import HomeScreen from '@/screens/screening/home/HomeScreen';
import ReviewWritingScreen from '@/screens/screening/reviewWriting/ReviewWritingScreen';
import ScreeningListScreen from '@/screens/screening/screeningList/ScreeningList';
import WritingScreen from '@/screens/screening/writing/WritingScreen';
import {ScreeningStackParamList} from '@/types/navigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<ScreeningStackParamList>();

const ScreeningStackNavigator = () => {
  const {stackNavigation} = useNavigator();

  // 스크리닝 화면 뒤로 가기
  const handleGoBack = () => {
    stackNavigation.goBack();
  };
  return (
    <Stack.Navigator>
      {/*홈 페이지*/}
      <Stack.Screen
        name={ScreeningStackScreen.HomeScreen}
        component={HomeScreen}
        options={{
          header: () => <TitleTopBar text="스크리닝" />,
        }}
      />
      {/*작성 페이지*/}
      <Stack.Screen
        name={ScreeningStackScreen.WritingScreen}
        component={WritingScreen}
        options={{
          header: () => (
            <CancelTopBar text="상영회 등록하기" onPress={handleGoBack} />
          ),
        }}
      />
      {/*상세 페이지*/}
      <Stack.Screen
        name={ScreeningStackScreen.DetailScreen}
        component={DetailScreen}
        options={{
          header: () => (
            <BackTitleTopBar text="Dynamic 상영회" goBack={handleGoBack} />
          ),
        }}
      />
      {/*리뷰 작성 페이지*/}
      <Stack.Screen
        name={ScreeningStackScreen.ReviewWritingScreen}
        component={ReviewWritingScreen}
        options={{
          header: () => (
            <CancelTopBar text="리뷰 작성하기" onPress={handleGoBack} />
          ),
        }}
      />
      {/*스크리닝 목록 페이지*/}
      <Stack.Screen
        name={ScreeningStackScreen.ScreeningListScreen}
        component={ScreeningListScreen}
        options={{
          header: () => <TitleTopBar text="스크리닝" />,
        }}
      />
    </Stack.Navigator>
  );
};
export default ScreeningStackNavigator;
