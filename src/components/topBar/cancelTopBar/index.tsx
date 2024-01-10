import SvgIcons from '@/assets/svgIcons';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {CommonTextProps} from '@/types/ui';
import {View} from 'react-native';
import {styles} from './CancelTopBar.style';

interface CancelTopBarProps extends CommonTextProps {
  onPress: () => void;
}

const CancelTopBar = ({text, onPress}: CancelTopBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Typography style="Label1" color={palette.Another.Black}>
          {text}
        </Typography>
      </View>
      <SvgIcons.CancelIcon onPress={onPress} />
    </View>
  );
};
export default CancelTopBar;
