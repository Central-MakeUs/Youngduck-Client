import stackScreens from '@/constants/stackScreens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '@/screens/login/LoginScreen';
import SignupScreen from '@/screens/signup/SignupScreen';
import BottomTabNavigator from './bottomTabNavigator';
import SignupCompleteScreen from '@/screens/signupComplete/SIgnupCompleteScreen';
import {RootStackParamList} from '@/types/navigator';
import MyPageScreen from '@/screens/myPage/MyPageScreen';
import PopcornPartyDetailScreen from '@/screens/popcornParty/detail/PopcornPartyDetailScreen';
import RecommandListScreen from '@/screens/popcornParty/recommandList/RecommandListScreen';
import WriteRecommandScreen from '@/screens/popcornParty/writeRecommand/WriteRecommandScreen';
import WriteReviewScreen from '@/screens/popcornParty/writeReview/WriteReviewScreen';
import TitleTopBar from '@/components/topBar/titleTopBar';

function StackNavigator() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/*로그인 페이지*/}
      {/* <Stack.Screen name={stackScreens.LoginScreen} component={LoginScreen} />
      <Stack.Screen name={stackScreens.SignupScreen} component={SignupScreen} />
      <Stack.Screen
        name={stackScreens.SignupCompleteScreen}
        component={SignupCompleteScreen}
      /> */}
      {/*BottomTab 3개 페이지*/}
      <Stack.Screen
        name={stackScreens.BottomTabScreens}
        component={BottomTabNavigator}
      />
      {/*마이 페이지*/}
      <Stack.Screen name={stackScreens.MyPageScreen} component={MyPageScreen} />
      {/* 팝콘파티 스크린 */}
      <Stack.Screen
        name={stackScreens.PopcornPartyDetailScreen}
        component={PopcornPartyDetailScreen}
      />
      <Stack.Screen
        name={stackScreens.RecommandListScreen}
        component={RecommandListScreen}
        options={{
          headerShown: true,
          header: () => <TitleTopBar text="팝콘 파티" />,
        }}
      />
      <Stack.Screen
        name={stackScreens.WriteRecommandScreen}
        component={WriteRecommandScreen}
      />
      <Stack.Screen
        name={stackScreens.WriteReviewScreen}
        component={WriteReviewScreen}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
