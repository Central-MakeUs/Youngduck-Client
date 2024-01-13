import SvgIcons from '@/assets/svgIcons';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {CommonMarginVerticalProps} from '@/types/ui';
import {View} from 'react-native';
import {backTitleStyles} from './BackTitleTopBar.style';
import Profile from '@/components/profile';

interface BackTitleTopBarProps extends CommonMarginVerticalProps {
  goBack: () => void;
  text: string;
}
const BackTitleTopBar = ({text, goBack, mb, mt}: BackTitleTopBarProps) => {
  return (
    <View
      style={{
        ...backTitleStyles.container,
        marginTop: mt ? mt : undefined,
        marginBottom: mb ? mb : undefined,
      }}>
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
