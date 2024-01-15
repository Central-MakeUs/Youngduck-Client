import SvgIcons from '@/assets/svgIcons';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {CommonMarginVerticalProps} from '@/types/ui';
import {View} from 'react-native';
import {backStyles} from './BackTopBar.style';
import Profile from '@/components/profile';

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
      <SvgIcons.BackArrowIcon onPress={onPress} />
    </View>
  );
};
export default BackTopBar;