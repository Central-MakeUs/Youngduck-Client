import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import bottomTabScreens from '../constants/bottomTabScreens';

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
