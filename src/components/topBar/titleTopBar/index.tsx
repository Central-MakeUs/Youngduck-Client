import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {CommonTextProps} from '@/types/ui';
import {View} from 'react-native';
import {titleStyles} from './TitleTopBar.style';

const TitleTopBar = ({text}: CommonTextProps) => {
  return (
    <View style={titleStyles.container}>
      <Typography style="Subtitle2" color={palette.Another.Black}>
        {text}
      </Typography>
    </View>
  );
};
export default TitleTopBar;
