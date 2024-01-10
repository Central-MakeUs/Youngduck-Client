import SvgIcons from '@/assets/svgIcons';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {CommonTextProps} from '@/types/ui';
import {View} from 'react-native';
import {styles} from './MenuTopBar.style';

interface MenuTopBarProps extends CommonTextProps {
  onPress: () => void;
}
const MenuTopBar = ({text, onPress}: MenuTopBarProps) => {
  return (
    <View style={styles.container}>
      <Typography style="Title1" color={palette.Text.Strong}>
        {text}
      </Typography>
      <SvgIcons.MenuIcon onPress={onPress} />
    </View>
  );
};
export default MenuTopBar;
