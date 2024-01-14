import {BottomTabParamList, RootStackParamList} from '@/types/navigator';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const useNavigator = () => {
  const stackNavigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const tabNavigation = useNavigation<NavigationProp<BottomTabParamList>>();

  return {stackNavigation, tabNavigation};
};

export default useNavigator;
