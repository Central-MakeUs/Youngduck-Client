import {
  BottomTabParamList,
  RootStackParamList,
  ScreeningStackParamList,
} from '@/types/navigator';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const useNavigator = () => {
  const stackNavigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const tabNavigation = useNavigation<NavigationProp<BottomTabParamList>>();

  const screeningStackNavigation =
    useNavigation<NavigationProp<ScreeningStackParamList>>();

  return {stackNavigation, tabNavigation, screeningStackNavigation};
};

export default useNavigator;
