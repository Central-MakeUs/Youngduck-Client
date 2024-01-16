import SvgIcons from '@/assets/svgIcons';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {CommonMarginVerticalProps} from '@/types/ui';
import {View} from 'react-native';
import {cancelStyles} from './CancelTopBar.style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface CancelTopBarProps extends CommonMarginVerticalProps {
  onPress: () => void;
  text: string;
}

const CancelTopBar = ({text, onPress, mb, mt}: CancelTopBarProps) => {
  const {top} = useSafeAreaInsets();
  const style = cancelStyles({top});
  return (
    <View
      style={{
        ...style.container,
        marginTop: mt ? mt : undefined,
        marginBottom: mb ? mb : undefined,
      }}>
      <View style={style.content}>
        <Typography style="Label1" color={palette.Another.Black}>
          {text}
        </Typography>
      </View>
      <SvgIcons.CancelIcon onPress={onPress} />
    </View>
  );
};
export default CancelTopBar;
