import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {CommonTextProps} from '@/types/ui';
import {View} from 'react-native';
import {subTitleStyles} from './SubTitleTopBar.style';

interface SubTitleTopBarProps extends CommonTextProps {
  subTitle: string;
}
const SubTitleTopBar = ({text, subTitle}: SubTitleTopBarProps) => {
  return (
    <View style={subTitleStyles.container}>
      <Typography style="Subtitle2" color={palette.Text.Strong}>
        {text}
      </Typography>
      <Typography style="Body1" color={palette.Text.Alternative} mt={8}>
        {subTitle}
      </Typography>
    </View>
  );
};
export default SubTitleTopBar;
