import {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import PopcornPartyHomeScreen from '@/screens/popCornParty/home/PopcornPartyHomeScreen';
import MyPageScreen from '@/screens/myPage/MyPageScreen';
import {
  checkAlarmPermission,
  requestAlarmPermission,
} from '@/services/permissionService';
import TitleTopBar from '@/components/topBar/titleTopBar';
import ScreeningStackNavigator from '../stackNavigator/ScreeningStackNavigator';
import SvgIcons from '@/assets/svgIcons';
import bottomTabScreens, {
  bottomTabBarLabel,
} from '@/constants/bottomTabScreens';
import palette from '@/styles/theme/color';
import {BottomTabParamList} from '@/types/navigator';
import {setIsAlarm} from '@/services/localStorage/localStorage';
import {useUserStore} from '@/stores/user';
import LoginPopup from '@/components/loginPopup';
import {useLoginPopupStore} from '@/stores/loginPopup';

import {bottomTabScreenOptions} from './BottomTabNavigator.style';

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
  const {user} = useUserStore();
  const {setLoginPopup} = useLoginPopupStore();

  // TODO: 알람 앱 상단으로 이동하기(android 권한 체크)
  useEffect(() => {
    if (!user.isLookAround) {
      requestAlarmPermission();
      checkAlarmPermission().then(res => {
        setIsAlarm(res);
      });
    }
  }, []);
  return (
    <>
      <LoginPopup />
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
          listeners={{
            tabPress: e => {
              if (user.isLookAround) {
                setLoginPopup(true);
                e.preventDefault();
              }
            },
          }}
        />
      </BottomTab.Navigator>
    </>
  );
};

export default BottomTabNavigator;
