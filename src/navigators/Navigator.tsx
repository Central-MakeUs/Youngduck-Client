import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';

function Navigator() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default Navigator;
