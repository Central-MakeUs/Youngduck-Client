import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {CommonTextProps} from '@/types/ui';
import {View} from 'react-native';
import {styles} from './TitleTopBar.style';

const TitleTopBar = ({text}: CommonTextProps) => {
  return (
    <View style={styles.container}>
      <Typography style="Subtitle2" color={palette.Another.Black}>
        {text}
      </Typography>
    </View>
  );
};
export default TitleTopBar;
