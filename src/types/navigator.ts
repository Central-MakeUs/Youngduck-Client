import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type StackScreenName = keyof RootStackParamList;
export type BottomTabScreenName = keyof BottomTabParamList;

export type RootStackParamList = {
  BottomTabScreens: undefined;
  LoginScreen: undefined;
  SignupScreen: undefined;
  SignupCompleteScreen: undefined;
  MyPageScreen: undefined;
  //TODO: 추후에 필요한 페이지 타입 주가
};

export type BottomTabParamList = {
  ScreeningScreen: undefined;
  HomeScreen: undefined;
  PopcornPartyScreen: undefined;
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
