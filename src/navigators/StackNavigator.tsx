import stackScreens from '@/constants/stackScreens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '@/screens/login/LoginScreen';
import BottomTabNavigator from './bottomTabNavigator';
import {RootStackParamList} from '@/types/navigator';
import MyPageScreen from '@/screens/myPage/MyPageScreen';

function StackNavigator() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/*로그인 페이지*/}
      {/*<Stack.Screen name={stackScreens.LoginScreen} component={LoginScreen} />*/}

      {/*BottomTab 3개 페이지*/}
      <Stack.Screen
        name={stackScreens.BottomTabScreens}
        component={BottomTabNavigator}
      />
      {/*마이 페이지*/}
      <Stack.Screen name={stackScreens.MyPageScreen} component={MyPageScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
