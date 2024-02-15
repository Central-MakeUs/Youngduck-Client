import {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import PopcornPartyHomeScreen from '@/screens/popCornParty/home/PopcornPartyHomeScreen';
import MyPageScreen from '@/screens/myPage/MyPageScreen';
import TitleTopBar from '@/components/topBar/titleTopBar';
import ScreeningStackNavigator from '../stackNavigator/ScreeningStackNavigator';
import SvgIcons from '@/assets/svgIcons';
import bottomTabScreens, {
  bottomTabBarLabel,
} from '@/constants/bottomTabScreens';
import palette from '@/styles/theme/color';
import {BottomTabParamList} from '@/types/navigator';
import {useUserStore} from '@/stores/user';
import LoginPopup from '@/components/loginPopup';
import {useLoginPopupStore} from '@/stores/loginPopup';
import {getUserData} from '@/apis/user/user';
import {getDeviceToken} from '@/services/alarmService';

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
  const {user, setUser} = useUserStore();
  const {setLoginPopup} = useLoginPopupStore();

  useEffect(() => {
    if (!user.isLookAround) {
      getUserData().then(user => {
        console.log('유저 정보 받아오기');
        setUser({
          type: user.data.oauthProvider,
          nickname: user.data.nickname,
          profileNumber: user.data.profileImgNum,
          email: user.data.email,
          isLookAround: false,
          name: user.data.name,
        });
        if (user.data) {
          getDeviceToken(user.data.userId);
        }
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
            tabBarAllowFontScaling: false,
            headerShown: false,
          }}
        />
        <BottomTab.Screen
          name={bottomTabScreens.PopcornPartyHomeScreen}
          component={PopcornPartyHomeScreen}
          options={{
            tabBarLabel: bottomTabBarLabel.PopcornPartyHomeScreen,
            tabBarAllowFontScaling: false,
            header: () => <TitleTopBar text="팝콘파티" />,
          }}
        />
        <BottomTab.Screen
          name={bottomTabScreens.MyPageScreen}
          component={MyPageScreen}
          options={{
            tabBarLabel: bottomTabBarLabel.MyPageScreen,
            tabBarAllowFontScaling: false,
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
