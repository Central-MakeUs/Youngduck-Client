import SvgIcons from '@/assets/svgIcons';
import {View} from 'react-native';
import {backStyles} from './BackTopBar.style';

interface IBackTopBarProps {
  onPress: () => void;
}

const BackTopBar = ({onPress}: IBackTopBarProps) => {
  return (
    <View style={backStyles.container}>
      <SvgIcons.BackArrowIcon onPress={onPress} />
    </View>
  );
};
export default BackTopBar;
