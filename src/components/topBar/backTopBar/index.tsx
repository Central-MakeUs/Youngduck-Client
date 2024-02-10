// backTopBar > index.tsx
import SvgIcons from '@/assets/svgIcons';

import {CommonMarginVerticalProps} from '@/types/ui';
import {TouchableOpacity, View} from 'react-native';
import {backStyles} from './BackTopBar.style';

interface BackTitleTopBarProps extends CommonMarginVerticalProps {
  onPress: () => void;
}

const BackTopBar = ({onPress, mb, mt}: BackTitleTopBarProps) => {
  return (
    <View
      style={{
        ...backStyles.container,
        marginTop: mt ? mt : undefined,
        marginBottom: mb ? mb : undefined,
      }}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <SvgIcons.BackArrowIcon />
      </TouchableOpacity>
    </View>
  );
};
export default BackTopBar;
