import SvgIcons from '@/assets/svgIcons';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {TouchableOpacity, View} from 'react-native';
import {cancelStyles} from './CancelTopBar.style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useNavigator from '@/hooks/useNavigator';

interface ICancelTopBarProps {
  text: string;
}

const CancelTopBar = ({text}: ICancelTopBarProps) => {
  const {top} = useSafeAreaInsets();
  const {stackNavigation} = useNavigator();
  const styles = cancelStyles({top});
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Typography style="Label1" color={palette.Another.Black}>
          {text}
        </Typography>
      </View>

      <TouchableOpacity
        style={styles.cancelButton}
        onPress={stackNavigation.goBack}
        activeOpacity={0.8}>
        <SvgIcons.CancelIcon />
      </TouchableOpacity>
    </View>
  );
};
export default CancelTopBar;
