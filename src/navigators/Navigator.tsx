import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import palette from '@/styles/theme/color';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: palette.Another.White,
  },
};

function Navigator() {
  return (
    <NavigationContainer theme={navTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default Navigator;
