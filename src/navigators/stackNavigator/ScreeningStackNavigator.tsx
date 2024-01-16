import TitleTopBar from '@/components/topBar/titleTopBar';
import ScreeningStackScreen from '@/constants/screeningStackScreen';
import HomeScreen from '@/screens/screening/home/HomeScreen';
import ScreeningListScreen from '@/screens/screening/screeningList/ScreeningList';
import {ScreeningStackParamList} from '@/types/navigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<ScreeningStackParamList>();

const ScreeningStackNavigator = () => {
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
