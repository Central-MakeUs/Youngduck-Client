import {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '@/screens/login/LoginScreen';
import SignupScreen from '@/screens/signup/SignupScreen';
import BottomTabNavigator from './bottomTabNavigator';
import SignupCompleteScreen from '@/screens/signupComplete/SIgnupCompleteScreen';
import DetailScreen from '@/screens/screening/detail/DetailScreen';
import WritingScreen from '@/screens/screening/writing/WritingScreen';
import KakaoSearchScreen from '@/screens/screening/kakaoSearch/KakaoSearchScreen';
import ReviewWritingScreen from '@/screens/screening/reviewWriting/ReviewWritingScreen';
import PopcornPartyDetailScreen from '@/screens/popCornParty/detail/PopcornPartyDetailScreen';
import RecommandListScreen from '@/screens/popCornParty/recommandList/RecommandListScreen';
import WriteRecommandScreen from '@/screens/popCornParty/writeRecommand/WriteRecommandScreen';
import WriteReviewScreen from '@/screens/popCornParty/writeReview/WriteReviewScreen';

import {RootStackParamList} from '@/types/navigator';
import CancelTopBar from '@/components/topBar/cancelTopBar';
import useNavigator from '@/hooks/useNavigator';
import {postAccessToken} from '@/apis/auth/auth';
import {getIsInstalled, setIsAlarm} from '@/services/localStorage/localStorage';
import stackScreens from '@/constants/stackScreens';
import ChangeNicknameScreen from '@/screens/myPage/changeNickname/ChangeNicknameScreen';
import SettingScreen from '@/screens/myPage/setting/SettingScreen';
import WithdrawScreen from '@/screens/myPage/setting/screens/withdraw/WithdrawScreen';
import ManageScreeningScreen from '@/screens/myPage/manageScreening/ManageScreeningScreen';
import ManageReviewScreen from '@/screens/myPage/manageReview/ManageReviewScreen';
import MyScreeningScreen from '@/screens/myPage/myScreening/MyScreeningScreen';
import MyDetailScreen from '@/screens/screening/myDetail/MyDetailScreen';
import LoadingPage from '@/components/pages/loadingPage';
import {useUserStore} from '@/stores/user';
import BackTitleTopBar from '@/components/topBar/backTitleTopBar';
import {
  checkAlarmPermission,
  requestAlarmPermission,
} from '@/services/permissionService';
import DetailWebviewScreen from '@/screens/screening/detailWebview/DetailWebviewScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigator() {
  const {stackNavigation} = useNavigator();
  const {user} = useUserStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 1000); //스플래시 활성화 시간

    // 알람 권한 물어보기
    requestAlarmPermission();
    checkAlarmPermission().then(res => {
      setIsAlarm(res);
    });

    getIsInstalled().then((res: boolean) => {
      if (res) {
        postAccessToken().then((res: boolean) => {
          if (res) {
            const autoLogin = setTimeout(() => {
              stackNavigation.navigate(stackScreens.BottomTabScreens);
              clearTimeout(autoLogin);
            }, 100);
          }
          setIsLoading(false);
        });
      } else {
        setIsLoading(false);
      }
    });

    if (user.isLookAround) {
      stackNavigation.navigate(stackScreens.BottomTabScreens);
    }

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  // 스크리닝 화면 뒤로 가기
  const handleGoBack = () => {
    stackNavigation.goBack();
  };

  return (
    <Stack.Navigator initialRouteName={stackScreens.LoginScreen}>
      {/*로그인 페이지*/}
      <Stack.Screen
        name={stackScreens.LoginScreen}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={stackScreens.SignupScreen}
        component={SignupScreen}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen
        name={stackScreens.SignupCompleteScreen}
        component={SignupCompleteScreen}
        options={{headerShown: false, gestureEnabled: false}}
      />
      {/*BottomTab 3개 페이지*/}
      <Stack.Screen
        name={stackScreens.BottomTabScreens}
        component={BottomTabNavigator}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      {/* 설정 페이지 */}
      <Stack.Screen
        name={stackScreens.SettingScreen}
        component={SettingScreen}
        options={{headerShown: false}}
      />
      {/*닉네임 수정 페이지*/}
      <Stack.Screen
        name={stackScreens.ChangeNicknameScreen}
        component={ChangeNicknameScreen}
        options={{headerShown: false}}
      />
      {/* 회원 탈퇴 페이지 */}
      <Stack.Screen
        name={stackScreens.WithdrawScreen}
        component={WithdrawScreen}
        options={{headerShown: false}}
      />
      {/* 스크리닝 관리 페이지 */}
      <Stack.Screen
        name={stackScreens.ManageScreeningScreen}
        component={ManageScreeningScreen}
        options={{headerShown: false}}
      />
      {/* 리뷰 관리 페이지 */}
      <Stack.Screen
        name={stackScreens.ManageReviewScreen}
        component={ManageReviewScreen}
        options={{headerShown: false}}
      />
      {/* 나의 스크리닝 페이지 */}
      <Stack.Screen
        name={stackScreens.MyScreeningScreen}
        component={MyScreeningScreen}
        options={{headerShown: false}}
      />
      {/*스크리닝 페이지*/}
      {/*작성 페이지*/}
      <Stack.Screen
        name={stackScreens.WritingScreen}
        component={WritingScreen}
        options={{headerShown: false}}
      />
      {/*상세 페이지*/}
      <Stack.Screen
        name={stackScreens.DetailScreen}
        component={DetailScreen}
        options={{headerShown: false}}
      />
      {/*내가 작성한 상세 페이지*/}
      <Stack.Screen
        name={stackScreens.MyDetailScreen}
        component={MyDetailScreen}
        options={{headerShown: false}}
      />
      {/*리뷰 작성 페이지*/}
      <Stack.Screen
        name={stackScreens.ReviewWritingScreen}
        component={ReviewWritingScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
          header: () => (
            <CancelTopBar text="리뷰 작성하기" onPress={handleGoBack} />
          ),
        }}
      />
      {/*카카오 장소 검색 페이지*/}
      <Stack.Screen
        name={stackScreens.KakaoSearchScreen}
        component={KakaoSearchScreen}
        options={{
          header: () => (
            <CancelTopBar text="상영회 장소 검색" onPress={handleGoBack} />
          ),
        }}
      />
      {/*스크리닝 웹뷰 페이지*/}
      <Stack.Screen
        name={stackScreens.DetailWebviewScreen}
        component={DetailWebviewScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* 팝콘파티 스크린 */}
      <Stack.Screen
        name={stackScreens.PopcornPartyDetailScreen}
        component={PopcornPartyDetailScreen}
        options={{headerShown: false}}
      />
      {/* 팝콘작 추천 목록 페이지 */}
      <Stack.Screen
        name={stackScreens.RecommandListScreen}
        component={RecommandListScreen}
        options={{
          headerShown: true,
          header: () => (
            <BackTitleTopBar
              opacity={0}
              text="팝콘파티"
              goBack={handleGoBack}
            />
          ),
        }}
      />
      {/* 팝콘작 추천하기 페이지 */}
      <Stack.Screen
        name={stackScreens.WriteRecommandScreen}
        component={WriteRecommandScreen}
        options={{
          header: () => (
            <CancelTopBar text="팝콘작 추천하기" onPress={handleGoBack} />
          ),
        }}
      />
      {/* 팝콘작 리뷰 작성 페이지 */}
      <Stack.Screen
        name={stackScreens.WriteReviewScreen}
        component={WriteReviewScreen}
        options={{headerShown: false, gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
