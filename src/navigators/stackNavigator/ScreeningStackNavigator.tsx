import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProfileBackTitleTopBar from '@/components/topBar/profileBackTitleTopBar';
import TitleTopBar from '@/components/topBar/titleTopBar';
import ScreeningStackScreen from '@/constants/screeningStackScreen';
import useNavigator from '@/hooks/useNavigator';
import HomeScreen from '@/screens/screening/home/HomeScreen';
import ScreeningListScreen from '@/screens/screening/screeningList/ScreeningList';
import {ScreeningStackParamList} from '@/types/navigator';

const Stack = createNativeStackNavigator<ScreeningStackParamList>();

const ScreeningStackNavigator = () => {
  const {screeningStackNavigation} = useNavigator();
  const handleGoBack = () => {
    screeningStackNavigation.navigate(ScreeningStackScreen.HomeScreen);
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
      {/*스크리닝 목록 페이지*/}
      <Stack.Screen
        name={ScreeningStackScreen.ScreeningListScreen}
        component={ScreeningListScreen}
        options={{
          header: () => (
            <ProfileBackTitleTopBar text="스크리닝" goBack={handleGoBack} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
export default ScreeningStackNavigator;
