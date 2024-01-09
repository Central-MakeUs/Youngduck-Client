import stackScreens from '@/constants/stackScreens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import LoginScreen from '@/screens/LoginScreen';

function StackNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={stackScreens.LoginScreen} component={LoginScreen} />
      <Stack.Screen
        name={stackScreens.BottomTabScreens}
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
