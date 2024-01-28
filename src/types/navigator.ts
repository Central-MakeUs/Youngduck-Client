import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type StackScreenName = keyof RootStackParamList;
export type BottomTabScreenName = keyof BottomTabParamList;

export type StackParamList = RootStackParamList &
  ScreeningStackParamList &
  PopcornPartyStackParamList;

// 전체 페이지 stack param 타입
export type RootStackParamList = {
  LoginScreen: undefined;
  SignupScreen: undefined;
  SignupCompleteScreen: undefined;
  BottomTabScreens: undefined;
  MyPageScreen: undefined;
  ChangeNicknameScreen: undefined;
  SettingScreen: undefined;
  AgreementScreen: {uri: string};
  WithdrawScreen: undefined;
  ManageScreeningScreen: {isWatcedScreening: boolean};
  ManageReviewScreen: {isScreeningReview: boolean};
  MyScreeningScreen: undefined;
} & PopcornPartyStackParamList &
  ScreeningStackScreensParamList;

// bottomTab 컴포넌트 param 타입
export type BottomTabParamList = {
  ScreeningScreen: undefined;
  PopcornPartyHomeScreen: undefined;
  MyPageScreen: undefined;
};

// 스크리닝 페이지 stack param 타입
export type ScreeningStackParamList = {
  HomeScreen: undefined;
  ScreeningListScreen: undefined;
};

export type ScreeningStackScreensParamList = {
  WritingScreen: {type: 'modified' | 'post'; search: string}; // 수정할 경우 또는 등록하는 경우 타입 생성
  DetailScreen: {id: number};
  ReviewWritingScreen: {id: number};
  KakaoSearchScreen: {type: 'modified' | 'post'};
};

type PopcornPartyStackParamList = {
  PopcornPartyHomeScreen: undefined;
  PopcornPartyDetailScreen: {id: number};
  RecommandListScreen: undefined;
  WriteRecommandScreen: undefined;
  WriteReviewScreen: undefined;
};

// bottomTab route 타입 지정
export type BottomTabNavigatorProps = {
  route: RouteProp<BottomTabParamList, BottomTabScreenName>;
};

// RootStackParmList에서의
// screen 페이지에서 navigation 타입 지정
export type ScreenNavigationProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

// screen 페이지에서 route 타입 지정
export type ScreenRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
