import palette from '@/styles/theme/color';
import {View, Pressable} from 'react-native';
import Typography from '../typography';
import tabBarStyles from './TabBar.style';

interface ITabBarProps {
  leftTabBarName: string;
  rightTabBarName: string;
  isLeft: boolean;
  handleTopBarState: (pressedTab: 'left' | 'right') => void;
}

const TabBar = ({
  leftTabBarName,
  rightTabBarName,
  isLeft,
  handleTopBarState,
}: ITabBarProps) => {
  const style = tabBarStyles({isLeft});
  return (
    <View style={style.container}>
      <Pressable
        onPress={() => handleTopBarState('left')}
        style={style.leftTabBar}>
        <Typography
          style="Label1"
          color={isLeft ? palette.Text.Normal : palette.Text.Alternative}>
          {leftTabBarName}
        </Typography>
      </Pressable>
      <Pressable
        onPress={() => handleTopBarState('right')}
        style={style.rightTabBar}>
        <Typography
          style="Label1"
          color={isLeft ? palette.Text.Alternative : palette.Text.Normal}>
          {rightTabBarName}
        </Typography>
      </Pressable>
    </View>
  );
};

export default TabBar;
