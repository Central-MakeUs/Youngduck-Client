import SvgIcons from '@/assets/svgIcons';

import {CommonMarginVerticalProps} from '@/types/ui';
import {View} from 'react-native';
import {backStyles} from './BackTopBar.style';
import TopBarContainer from '@/components/container/topBarContainer';

interface BackTitleTopBarProps extends CommonMarginVerticalProps {
  onPress: () => void;
}

const BackTopBar = ({onPress, mb, mt}: BackTitleTopBarProps) => {
  return (
    <TopBarContainer>
      <View
        style={{
          ...backStyles.container,
          marginTop: mt ? mt : undefined,
          marginBottom: mb ? mb : undefined,
        }}>
        <SvgIcons.BackArrowIcon onPress={onPress} />
      </View>
    </TopBarContainer>
  );
};
export default BackTopBar;
