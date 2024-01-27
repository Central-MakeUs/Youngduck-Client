import {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '@/screens/login/LoginScreen';
import SignupScreen from '@/screens/signup/SignupScreen';
import BottomTabNavigator from './bottomTabNavigator';
import SignupCompleteScreen from '@/screens/signupComplete/SIgnupCompleteScreen';
import MyPageScreen from '@/screens/myPage/MyPageScreen';
import DetailScreen from '@/screens/screening/detail/DetailScreen';
import WritingScreen from '@/screens/screening/writing/WritingScreen';
import KakaoSearchScreen from '@/screens/screening/kakaoSearch/KakaoSearchScreen';
import ReviewWritingScreen from '@/screens/screening/reviewWriting/ReviewWritingScreen';
import PopcornPartyDetailScreen from '@/screens/popCornParty/detail/PopcornPartyDetailScreen';
import RecommandListScreen from '@/screens/popCornParty/recommandList/RecommandListScreen';
import WriteRecommandScreen from '@/screens/popCornParty/writeRecommand/WriteRecommandScreen';
import WriteReviewScreen from '@/screens/popCornParty/writeReview/WriteReviewScreen';

import {RootStackParamList} from '@/types/navigator';
import TitleTopBar from '@/components/topBar/titleTopBar';
import CancelTopBar from '@/components/topBar/cancelTopBar';
import useNavigator from '@/hooks/useNavigator';
import {postAccessToken} from '@/apis/auth/auth';
import {getIsInstalled} from '@/services/localStorage/localStorage';
import stackScreens from '@/constants/stackScreens';
import ChangeNicknameScreen from '@/screens/myPage/changeNickname/ChangeNicknameScreen';
import SettingScreen from '@/screens/myPage/setting/SettingScreen';
import AgreementScreen from '@/screens/myPage/setting/screens/agreement/AgreementScreen';
import WithdrawScreen from '@/screens/myPage/setting/screens/withdraw/WithdrawScreen';
import ManageScreeningScreen from '@/screens/myPage/manageScreening/ManageScreeningScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigator() {
  const {stackNavigation} = useNavigator();

  const [isSignIn, setIsSignIn] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  //const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 1000); //스플래시 활성화 시간

    getIsInstalled().then((res: boolean) => {
      setIsInstalled(res);

      if (res) {
        postAccessToken().then(res => {
          setIsSignIn(res);
          //setIsLoading(false);
        });
      } else {
        //setIsLoading(false);
      }
    });

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isSignIn) {
      stackNavigation.navigate(stackScreens.BottomTabScreens);
    }
  }, [isSignIn]);

  // 스크리닝 화면 뒤로 가기
  const handleGoBack = () => {
    stackNavigation.goBack();
  };

  return (
    <Stack.Navigator>
      {/*로그인 페이지*/}
      <Stack.Screen
        name={stackScreens.LoginScreen}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={stackScreens.SignupScreen}
        component={SignupScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={stackScreens.SignupCompleteScreen}
        component={SignupCompleteScreen}
        options={{headerShown: false}}
      /> 
      {/*BottomTab 3개 페이지*/}
      <Stack.Screen
        name={stackScreens.BottomTabScreens}
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      {/*닉네임 수정 페이지*/}
      <Stack.Screen
        name={stackScreens.ChangeNicknameScreen}
        component={ChangeNicknameScreen}
        options={{headerShown: false}}
      />
      {/* 설정 페이지 */}
      <Stack.Screen
        name={stackScreens.SettingScreen}
        component={SettingScreen}
        options={{headerShown: false}}
      />
      {/* 약관 동의 페이지 */}
      <Stack.Screen
        name={stackScreens.AgreementScreen}
        component={AgreementScreen}
        options={{headerShown: false}}
      />
      {/* 회원 탈퇴 페이지 */}
      <Stack.Screen
        name={stackScreens.WithdrawScreen}
        component={WithdrawScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={stackScreens.ManageScreeningScreen}
        component={ManageScreeningScreen}
        options={{headerShown: false}}
      />
      {/*스크리닝 페이지*/}
      {/*작성 페이지*/}
      <Stack.Screen
        name={stackScreens.WritingScreen}
        component={WritingScreen}
        options={{
          header: () => (
            <CancelTopBar text="상영회 등록하기" onPress={handleGoBack} />
          ),
        }}
      />
      {/*상세 페이지*/}
      <Stack.Screen
        name={stackScreens.DetailScreen}
        component={DetailScreen}
        options={{headerShown: false}}
      />
      {/*리뷰 작성 페이지*/}
      <Stack.Screen
        name={stackScreens.ReviewWritingScreen}
        component={ReviewWritingScreen}
        options={{
          headerShown: false,
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
      {/* 팝콘파티 스크린 */}
      <Stack.Screen
        name={stackScreens.PopcornPartyDetailScreen}
        component={PopcornPartyDetailScreen}
        options={{headerShown: false}}
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
        options={{
          header: () => (
            <CancelTopBar text="팝콘작 추천하기" onPress={handleGoBack} />
          ),
        }}
      />
      <Stack.Screen
        name={stackScreens.WriteReviewScreen}
        component={WriteReviewScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
