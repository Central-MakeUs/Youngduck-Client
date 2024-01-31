import {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import PopcornPartyHomeScreen from '@/screens/popCornParty/home/PopcornPartyHomeScreen';
import MyPageScreen from '@/screens/myPage/MyPageScreen';
import {checkAlarmPermission} from '@/services/permissionService';
import TitleTopBar from '@/components/topBar/titleTopBar';
import ScreeningStackNavigator from '../stackNavigator/ScreeningStackNavigator';
import SvgIcons from '@/assets/svgIcons';
import bottomTabScreens, {
  bottomTabBarLabel,
} from '@/constants/bottomTabScreens';
import palette from '@/styles/theme/color';
import {BottomTabParamList} from '@/types/navigator';

import {bottomTabScreenOptions} from './BottomTabNavigator.style';
import {getIsAlarm, setIsAlarm} from '@/services/localStorage/localStorage';
import {checkNotifications} from 'react-native-permissions';

export const getTabBarIcon = (routeName: string, focused: boolean) => {
  const iconColor = focused ? palette.Primary.Normal : palette.Text.Disable;

  return (
    <>
      {routeName === 'ScreeningScreen' && (
        <SvgIcons.ScreeningIcon fill={iconColor} />
      )}
      {routeName === 'PopcornPartyHomeScreen' && (
        <SvgIcons.PopCornParty fill={iconColor} />
      )}
      {routeName === 'MyPageScreen' && <SvgIcons.MyPageIcon fill={iconColor} />}
    </>
  );
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  useEffect(() => {
    checkAlarmPermission().then(async () => {
      const res = await checkNotifications();
      console.log(res.status);
      await setIsAlarm(res.status === 'granted');
    });
  }, []);
  return (
    <BottomTab.Navigator
      screenOptions={bottomTabScreenOptions}
      initialRouteName={bottomTabScreens.ScreeningScreen}>
      <BottomTab.Screen
        name={bottomTabScreens.ScreeningScreen}
        component={ScreeningStackNavigator}
        options={{
          tabBarLabel: bottomTabBarLabel.ScreeningScreen,
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name={bottomTabScreens.PopcornPartyHomeScreen}
        component={PopcornPartyHomeScreen}
        options={{
          tabBarLabel: bottomTabBarLabel.PopcornPartyHomeScreen,
          header: () => <TitleTopBar text="팝콘 파티" />,
        }}
      />
      <BottomTab.Screen
        name={bottomTabScreens.MyPageScreen}
        component={MyPageScreen}
        options={{
          tabBarLabel: bottomTabBarLabel.MyPageScreen,
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
