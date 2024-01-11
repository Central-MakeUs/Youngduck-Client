import {RootStackParamList} from '@/types/navigator';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const useNavigator = () => {
  const stackNavigation = useNavigation<NavigationProp<RootStackParamList>>();

  return stackNavigation;
};

export default useNavigator;
