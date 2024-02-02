import {
  BottomTabParamList,
  ScreeningStackParamList,
  StackParamList,
} from '@/types/navigator';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const useNavigator = () => {
  const stackNavigation =
    useNavigation<NativeStackNavigationProp<StackParamList>>();
  const tabNavigation = useNavigation<NavigationProp<BottomTabParamList>>();
  const screeningStackNavigation =
    useNavigation<NativeStackNavigationProp<ScreeningStackParamList>>();

  return {stackNavigation, tabNavigation, screeningStackNavigation};
};

export default useNavigator;
