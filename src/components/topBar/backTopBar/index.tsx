import SvgIcons from '@/assets/svgIcons';

import {CommonMarginVerticalProps} from '@/types/ui';
import {View} from 'react-native';
import {backStyles} from './BackTopBar.style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface BackTitleTopBarProps extends CommonMarginVerticalProps {
  onPress: () => void;
}

const BackTopBar = ({onPress, mb, mt}: BackTitleTopBarProps) => {
  const {top} = useSafeAreaInsets();
  const style = backStyles({top});
  return (
    <View
      style={{
        ...style.container,
        marginTop: mt ? mt : undefined,
        marginBottom: mb ? mb : undefined,
      }}>
      <SvgIcons.BackArrowIcon onPress={onPress} />
    </View>
  );
};
export default BackTopBar;
