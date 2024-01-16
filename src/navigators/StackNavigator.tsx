import stackScreens from '@/constants/stackScreens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '@/screens/login/LoginScreen';
import SignupScreen from '@/screens/signup/SignupScreen';
import BottomTabNavigator from './bottomTabNavigator';
import SignupCompleteScreen from '@/screens/signupComplete/SIgnupCompleteScreen';
import {RootStackParamList} from '@/types/navigator';
import MyPageScreen from '@/screens/myPage/MyPageScreen';
import DetailScreen from '@/screens/screening/detail/DetailScreen';
import BackTitleTopBar from '@/components/topBar/backTitleTopBar';
import useNavigator from '@/hooks/useNavigator';
import ReviewWritingScreen from '@/screens/screening/reviewWriting/ReviewWritingScreen';
import CancelTopBar from '@/components/topBar/cancelTopBar';

function StackNavigator() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const {stackNavigation} = useNavigator();

  // 스크리닝 화면 뒤로 가기
  const handleGoBack = () => {
    stackNavigation.goBack();
  };
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

      {/*스크리닝 페이지*/}
      {/*상세 페이지*/}
      <Stack.Screen
        name={stackScreens.DetailScreen}
        component={DetailScreen}
        options={{
          header: () => (
            <BackTitleTopBar text="Dynamic 상영회" goBack={handleGoBack} />
          ),
        }}
      />
      {/*리뷰 작성 페이지*/}
      <Stack.Screen
        name={stackScreens.ReviewWritingScreen}
        component={ReviewWritingScreen}
        options={{
          header: () => (
            <CancelTopBar text="리뷰 작성하기" onPress={handleGoBack} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
