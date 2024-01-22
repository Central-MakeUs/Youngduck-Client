import palette from '@/styles/theme/color';
import {View, Pressable} from 'react-native';
import Typography from '../typography';
import tabBarStyles from './TabBar.style';

interface ITabBarProps {
  currentTabBarNumber: number;
  setCurrentTabBarNumber: React.Dispatch<React.SetStateAction<number>>;
  tabBars: {title: string; tabNumber: number}[];
}

const TabBar = ({
  currentTabBarNumber,
  setCurrentTabBarNumber,
  tabBars,
}: ITabBarProps) => {
  return (
    <View style={tabBarStyles.container}>
      {tabBars.map(tabBar => (
        <Pressable
          onPress={() => setCurrentTabBarNumber(tabBar.tabNumber)}
          style={
            tabBar.tabNumber === currentTabBarNumber
              ? tabBarStyles.currentTabBar
              : tabBarStyles.defaultTabBar
          }
          key={`${tabBar.title}-container`}>
          <Typography
            style="Label1"
            color={
              tabBar.tabNumber === currentTabBarNumber
                ? palette.Text.Normal
                : palette.Text.Alternative
            }
            key={`${tabBar.title}`}>
            {tabBar.title}
          </Typography>
        </Pressable>
      ))}
    </View>
  );
};

export default TabBar;
