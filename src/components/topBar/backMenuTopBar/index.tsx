import SvgIcons from '@/assets/svgIcons';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {CommonTextProps} from '@/types/ui';
import {View} from 'react-native';
import {styles} from './BackMenuTopBar.style';

interface BackMenuTopBarProps extends CommonTextProps {
  goBack: () => void;
  onPress: () => void;
}
const BackMenuTopBar = ({text, goBack, onPress}: BackMenuTopBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <SvgIcons.BackArrowIcon onPress={goBack} />
        <Typography style="Subtitle2" color={palette.Another.Black} ml={8}>
          {text}
        </Typography>
      </View>
      <SvgIcons.MenuIcon onPress={onPress} />
    </View>
  );
};
export default BackMenuTopBar;
