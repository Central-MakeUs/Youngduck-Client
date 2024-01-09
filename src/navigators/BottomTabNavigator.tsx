import bottomTabScreens from '@/constants/bottomTabScreens';
import LoginScreen from '@/screens/LoginScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function BottomTabNavigator() {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name={bottomTabScreens.LoginScreen}
        component={LoginScreen}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
