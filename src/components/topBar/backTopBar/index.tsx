import SvgIcons from '@/assets/svgIcons';
import {View} from 'react-native';
import {backStyles} from './BackTopBar.style';
import useNavigator from '@/hooks/useNavigator';

const BackTopBar = () => {
  const navigator = useNavigator();
  return (
    <View style={backStyles.container}>
      <SvgIcons.BackArrowIcon onPress={() => navigator.goBack()} />
    </View>
  );
};
export default BackTopBar;
