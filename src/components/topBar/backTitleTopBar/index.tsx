import SvgIcons from '@/assets/svgIcons';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {CommonTextProps} from '@/types/ui';
import {View} from 'react-native';
import {backTitleStyles} from './BackTitleTopBar.style';
import Profile from '@/components/profile';

interface BackTitleTopBarProps extends CommonTextProps {
  goBack: () => void;
}
const BackTitleTopBar = ({text, goBack}: BackTitleTopBarProps) => {
  return (
    <View style={backTitleStyles.container}>
      <View style={backTitleStyles.content}>
        <SvgIcons.BackArrowIcon onPress={goBack} />
        <Typography style="Subtitle2" color={palette.Another.Black} ml={8}>
          {text}
        </Typography>
      </View>
      <Profile />
    </View>
  );
};
export default BackTitleTopBar;
