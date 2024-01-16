import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type StackScreenName = keyof RootStackParamList;
export type BottomTabScreenName = keyof BottomTabParamList;

export type StackParamList = RootStackParamList & ScreeningStackParamList;

// 전체 페이지 stack param 타입
export type RootStackParamList = {
  LoginScreen: undefined;
  SignupScreen: undefined;
  SignupCompleteScreen: undefined;
  BottomTabScreens: undefined;
  MyPageScreen: undefined;
  //TODO: 추후에 필요한 페이지 타입 주가

  // 스크리닝 페이지
  WritingScreen: undefined;
  DetailScreen: {id: number};
  ReviewWritingScreen: undefined;
};

// bottomTab 컴포넌트 param 타입
export type BottomTabParamList = {
  ScreeningScreen: undefined;
  HomeScreen: undefined;
  PopcornPartyScreen: undefined;
};

// 스크리닝 페이지 stack param 타입
export type ScreeningStackParamList = {
  HomeScreen: undefined;
  ScreeningListScreen: undefined;
};

export type ScreeningStackScreensParamList = {
  WritingScreen: undefined;
  DetailScreen: {id: number};
  ReviewWritingScreen: undefined;
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
