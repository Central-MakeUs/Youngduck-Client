import SvgIcons from '@/assets/svgIcons';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {CommonTextProps} from '@/types/ui';
import {View} from 'react-native';
import {subMenuStyles} from './SubMenuTopBar.style';

interface SubMenuTopBarProps extends CommonTextProps {
  goback: () => void;
}

const SubMenuTopBar = ({text, goback}: SubMenuTopBarProps) => {
  return (
    <View style={subMenuStyles.container}>
      <Typography style="Label1" color={palette.Text.Normal}>
        {text}
      </Typography>
      <SvgIcons.RightArrowIcon onPress={goback} />
    </View>
  );
};
export default SubMenuTopBar;
