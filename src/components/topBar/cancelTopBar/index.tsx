import SvgIcons from '@/assets/svgIcons';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {CommonMarginVerticalProps} from '@/types/ui';
import {View} from 'react-native';
import {cancelStyles} from './CancelTopBar.style';

interface CancelTopBarProps extends CommonMarginVerticalProps {
  onPress: () => void;
  text: string;
}

const CancelTopBar = ({text, onPress, mb, mt}: CancelTopBarProps) => {
  return (
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
  );
};
export default CancelTopBar;
