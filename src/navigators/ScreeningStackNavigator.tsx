import ScreeningStackScreen from '@/constants/screeningStackScreen';
import DetailScreen from '@/screens/screening/detail/DetailScreen';
import HomeScreen from '@/screens/screening/home/HomeScreen';
import ReviewWritingScreen from '@/screens/screening/reviewWriting/ReviewWritingScreen';
import ScreeningListScreen from '@/screens/screening/screeningList/ScreeningList';
import WritingScreen from '@/screens/screening/writing/WritingScreen';
import {ScreeningStackParamList} from '@/types/navigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<ScreeningStackParamList>();

const ScreeningStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/*홈 페이지*/}
      <Stack.Screen
        name={ScreeningStackScreen.HomeScreen}
        component={HomeScreen}
      />
      {/*작성 페이지*/}
      <Stack.Screen
        name={ScreeningStackScreen.WritingScreen}
        component={WritingScreen}
      />
      {/*상세 페이지*/}
      <Stack.Screen
        name={ScreeningStackScreen.DetailScreen}
        component={DetailScreen}
      />
      {/*리뷰 작성 페이지*/}
      <Stack.Screen
        name={ScreeningStackScreen.ReviewWritingScreen}
        component={ReviewWritingScreen}
      />
      {/*스크리닝 목록 페이지*/}
      <Stack.Screen
        name={ScreeningStackScreen.ScreeningListScreen}
        component={ScreeningListScreen}
      />
    </Stack.Navigator>
  );
};
export default ScreeningStackNavigator;
