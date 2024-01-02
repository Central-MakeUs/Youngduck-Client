import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import stackScreens from '../constants/stackScreens';

function StackNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={stackScreens.BottomTabScreens}
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
