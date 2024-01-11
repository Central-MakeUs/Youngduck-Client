import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {CommonTextProps} from '@/types/ui';
import {View} from 'react-native';
import {subTitleStyles} from './SubTitleTopBar.style';

const SubTitleTopBar = ({text}: CommonTextProps) => {
  return (
    <View style={subTitleStyles.container}>
      <Typography style="Subtitle2" color={palette.Text.Strong}>
        {text}
      </Typography>
    </View>
  );
};
export default SubTitleTopBar;
