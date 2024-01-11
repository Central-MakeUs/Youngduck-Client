import {ParamListBase, RouteProp} from '@react-navigation/native';

export type StackScreenName = keyof RootStackParamList;
export type BottomTabScreenName = keyof BottomTabParamList;

export type RootStackParamList = {
  BottomTabScreens: undefined;
  //LoginScreen: undefined;
  //TODO: 추후에 필요한 페이지 타입 주가
};

export type BottomTabParamList = {
  ScreeningScreen: undefined;
  HomeScreen: undefined;
  PopcornPartyScreen: undefined;
};

export type RoutePropsType = {
  route: RouteProp<ParamListBase, StackScreenName | BottomTabScreenName>;
};
