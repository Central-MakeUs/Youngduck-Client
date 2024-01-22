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
import WritingScreen from '@/screens/screening/writing/WritingScreen';

import PopcornPartyDetailScreen from '@/screens/popCornParty/detail/PopcornPartyDetailScreen';
import RecommandListScreen from '@/screens/popCornParty/recommandList/RecommandListScreen';
import WriteRecommandScreen from '@/screens/popCornParty/writeRecommand/WriteRecommandScreen';
import WriteReviewScreen from '@/screens/popCornParty/writeReview/WriteReviewScreen';
import TitleTopBar from '@/components/topBar/titleTopBar';
import KakaoSearchScreen from '@/screens/screening/kakaoSearch/KakaoSearchScreen';
import {useLocationStore} from '@/stores/location';

function StackNavigator() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const {stackNavigation} = useNavigator();

  const {setLocation} = useLocationStore();

  // 스크리닝 화면 뒤로 가기
  const handleGoBack = () => {
    stackNavigation.goBack();
  };

  // 카카오 검색 초기화
  const handleSearchGoBack = () => {
    handleGoBack();
    setLocation('');
  };
  return (
    <Stack.Navigator>
      {/*로그인 페이지*/}
      {/*<Stack.Screen
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
      />*/}
      {/*BottomTab 3개 페이지*/}
      <Stack.Screen
        name={stackScreens.BottomTabScreens}
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      {/*마이 페이지*/}
      <Stack.Screen name={stackScreens.MyPageScreen} component={MyPageScreen} />
      {/*스크리닝 페이지*/}
      {/*작성 페이지*/}
      <Stack.Screen
        name={stackScreens.WritingScreen}
        component={WritingScreen}
        options={{
          header: () => (
            <CancelTopBar text="상영회 등록하기" onPress={handleSearchGoBack} />
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
