import {BottomTabParamList, RootStackParamList} from '@/types/navigator';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const useNavigator = () => {
  const stackNavigation = useNavigation<NavigationProp<RootStackParamList>>();
  const tabNavigation = useNavigation<NavigationProp<BottomTabParamList>>();

  return {stackNavigation, tabNavigation};
};

export default useNavigator;
