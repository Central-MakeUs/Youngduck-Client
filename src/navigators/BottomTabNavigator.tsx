import bottomTabScreens from '@/constants/bottomTabScreens';
import HomeScreen from '@/screens/HomeScreen';
import PopcornPartyScreen from '@/screens/PopcornPartyScreen';
import ScreeningScreen from '@/screens/ScreeningScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function BottomTabNavigator() {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen
        name={bottomTabScreens.ScreeningScreen}
        component={ScreeningScreen}
      />
      <BottomTab.Screen
        name={bottomTabScreens.HomeScreen}
        component={HomeScreen}
      />
      <BottomTab.Screen
        name={bottomTabScreens.PopcornPartyScreen}
        component={PopcornPartyScreen}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
