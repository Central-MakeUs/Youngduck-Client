import palette from '@/styles/theme/color';
import {getTabBarIcon} from '.';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {BottomTabNavigatorProps} from '@/types/navigator';

export const bottomTabScreenOptions = ({
  route,
}: BottomTabNavigatorProps): BottomTabNavigationOptions => ({
  tabBarIcon: ({focused}: {focused: boolean}) =>
    getTabBarIcon(route.name, focused),
  tabBarActiveTintColor: palette.Primary.Normal,
  tabBarInactiveTintColor: palette.Text.Disable,
  tabBarStyle: {
    height: 80,
    borderTopWidth: 1,
    borderTopColor: palette.Primary.Alternative,
    paddingTop: 17.5,
    paddingBottom: 20,
  },
  tabBarLabelStyle: {
    fontWeight: '600',
    fontSize: 11,
    lineHeight: 16,
    fontFamily: 'Pretendard Variable',
    marginTop: 7,
  },
  tabBarHideOnKeyboard: true,
});
