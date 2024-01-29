import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import palette from '@/styles/theme/color';
import SnackBar from '@/components/snackBar';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: palette.Another.White,
  },
};

function Navigator() {
  return (
    <>
      <NavigationContainer theme={navTheme}>
        <StackNavigator />
      </NavigationContainer>
      <SnackBar />
    </>
  );
}

export default Navigator;
