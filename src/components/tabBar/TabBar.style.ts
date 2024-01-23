import palette from '@/styles/theme/color';
import {StyleSheet, ViewStyle} from 'react-native';

interface ITabBarStylesProp {
  isLeft: boolean;
}
const commonTabBarStyles: ViewStyle = {
  width: 100,
  alignItems: 'center',
  paddingBottom: 12,
};

const tabBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: palette.Line.Normal,
    borderBottomWidth: 1,
  },
  defaultTabBar: {
    ...commonTabBarStyles,
    borderBottomWidth: 0,
  },
  currentTabBar: {
    ...commonTabBarStyles,
    borderBottomWidth: 2,
  },
});

export default tabBarStyles;
