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

const tabBarStyles = ({isLeft}: ITabBarStylesProp) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderBottomColor: palette.Line.Normal,
      borderBottomWidth: 1,
    },
    leftTabBar: {
      ...commonTabBarStyles,
      borderBottomWidth: isLeft ? 2 : 0,
    },
    rightTabBar: {
      ...commonTabBarStyles,
      borderBottomWidth: isLeft ? 0 : 2,
    },
  });

export default tabBarStyles;
