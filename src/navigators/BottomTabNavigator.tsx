import bottomTabScreens from '@/constants/bottomTabScreens';
import HomeScreen from '@/screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function BottomTabNavigator() {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name={bottomTabScreens.HomeScreen}
        component={HomeScreen}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
