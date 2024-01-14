import {
  BottomTabParamList,
  RootStackParamList,
  ScreeningStackParamList,
} from '@/types/navigator';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const useNavigator = () => {
  const stackNavigation = useNavigation<NavigationProp<RootStackParamList>>();
  const tabNavigation = useNavigation<NavigationProp<BottomTabParamList>>();

  const screeningStackNavigation =
    useNavigation<NavigationProp<ScreeningStackParamList>>();

  return {stackNavigation, tabNavigation, screeningStackNavigation};
};

export default useNavigator;
