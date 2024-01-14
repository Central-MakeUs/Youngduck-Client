import SvgIcons from '@/assets/svgIcons';
import bottomTabScreens, {
  bottomTabBarLabel,
} from '@/constants/bottomTabScreens';
import HomeScreen from '@/screens/home/HomeScreen';
import PopcornPartyScreen from '@/screens/popCornParty/PopcornPartyScreen';
import palette from '@/styles/theme/color';
import {BottomTabParamList} from '@/types/navigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {bottomTabScreenOptions} from './BottomTabNavigator.style';
import TitleTopBar from '@/components/topBar/titleTopBar';
import ScreeningStackNavigator from '../ScreeningStackNavigator';

export const getTabBarIcon = (routeName: string, focused: boolean) => {
  const iconColor = focused ? palette.Primary.Normal : palette.Text.Disable;

  return (
    <>
      {routeName === 'ScreeningScreen' && (
        <SvgIcons.ScreeningIcon fill={iconColor} />
      )}
      {routeName === 'HomeScreen' && <SvgIcons.PopCornIcon fill={iconColor} />}
      {routeName === 'PopcornPartyScreen' && (
        <SvgIcons.PopCornParty fill={iconColor} />
      )}
    </>
  );
};

function BottomTabNavigator() {
  const BottomTab = createBottomTabNavigator<BottomTabParamList>();

  return (
    <BottomTab.Navigator screenOptions={bottomTabScreenOptions}>
      <BottomTab.Screen
        name={bottomTabScreens.ScreeningScreen}
        component={ScreeningStackNavigator}
        options={{
          tabBarLabel: bottomTabBarLabel.ScreeningScreen,
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name={bottomTabScreens.HomeScreen}
        component={HomeScreen}
        options={{
          tabBarLabel: bottomTabBarLabel.HomeScreen,
          header: () => <TitleTopBar text="파콩" />,
        }}
      />
      <BottomTab.Screen
        name={bottomTabScreens.PopcornPartyScreen}
        component={PopcornPartyScreen}
        options={{
          tabBarLabel: bottomTabBarLabel.PopcornPartyScreen,
          header: () => <TitleTopBar text="팝콘 파티" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
