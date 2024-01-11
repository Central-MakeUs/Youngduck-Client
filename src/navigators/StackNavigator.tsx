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
      <Stack.Screen name={stackScreens.LoginScreen} component={LoginScreen} />
      <Stack.Screen name={stackScreens.MyPageScreen} component={MyPageScreen} />
      <Stack.Screen
        name={stackScreens.BottomTabScreens}
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
