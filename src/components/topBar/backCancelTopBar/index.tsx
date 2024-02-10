import SvgIcons from '@/assets/svgIcons';

import {CommonMarginVerticalProps} from '@/types/ui';
import {TouchableOpacity, View} from 'react-native';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import useNavigator from '@/hooks/useNavigator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import backCancelTopBarStyles from './BackCancelTopBar.style';

interface BackTitleTopBarProps extends CommonMarginVerticalProps {
  onPress: () => void;
  text: string;
}

const BackCancelTopBar = ({onPress, text, mb, mt}: BackTitleTopBarProps) => {
  const {stackNavigation} = useNavigator();
  const {top} = useSafeAreaInsets();
  const style = backCancelTopBarStyles({top});
  return (
    <View
      style={{
        ...style.container,
        marginTop: mt ? mt : undefined,
        marginBottom: mb ? mb : undefined,
      }}>
      <SvgIcons.BackArrowIcon onPress={onPress} />
      <Typography style="Label1" color={palette.Another.Black}>
        {text}
      </Typography>
      <TouchableOpacity onPress={stackNavigation.goBack} activeOpacity={0.8}>
        <SvgIcons.CancelIcon />
      </TouchableOpacity>
    </View>
  );
};
export default BackCancelTopBar;
