import SvgIcons from '@/assets/svgIcons';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {CommonMarginVerticalProps} from '@/types/ui';
import {View} from 'react-native';
import {cancelStyles} from './CancelTopBar.style';
import TopBarContainer from '@/components/container/topBarContainer';

interface CancelTopBarProps extends CommonMarginVerticalProps {
  onPress: () => void;
  text: string;
}

const CancelTopBar = ({text, onPress, mb, mt}: CancelTopBarProps) => {
  return (
    <TopBarContainer>
      <View
        style={{
          ...cancelStyles.container,
          marginTop: mt ? mt : undefined,
          marginBottom: mb ? mb : undefined,
        }}>
        <View style={cancelStyles.content}>
          <Typography style="Label1" color={palette.Another.Black}>
            {text}
          </Typography>
        </View>
        <SvgIcons.CancelIcon onPress={onPress} />
      </View>
    </TopBarContainer>
  );
};
export default CancelTopBar;
