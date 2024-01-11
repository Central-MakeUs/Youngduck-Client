import palette from '@/styles/theme/color';
import {RoutePropsType} from '@/types/navigator';
import {getTabBarIcon} from '.';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

export const bottomTabScreenOptions = ({
  route,
}: RoutePropsType): BottomTabNavigationOptions => ({
  tabBarIcon: ({focused}: {focused: boolean}) =>
    getTabBarIcon(route.name, focused),
  tabBarActiveTintColor: palette.Primary.Normal,
  tabBarInactiveTintColor: palette.Text.Disable,
  tabBarStyle: {
    height: 80,
    borderTopWidth: 1,
    borderTopColor: palette.Primary.Alternative,
    paddingTop: 15,
    paddingBottom: 16,
  },
  tabBarLabelStyle: {
    fontWeight: '600',
    fontSize: 11,
    lineHeight: 16,
    fontFamily: 'Pretendard Variable',
  },
});
