import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Profile from '@/components/profile';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {CommonMarginVerticalProps} from '@/types/ui';
import SvgIcons from '@/assets/svgIcons';

import {backTitleStyles} from './ProfileBackTitleTopBar.style';

interface TitleTopBarProps extends CommonMarginVerticalProps {
  text: string;
  goBack: () => void;
}
const ProfileBackTitleTopBar = ({text, mb, mt, goBack}: TitleTopBarProps) => {
  const {top} = useSafeAreaInsets();
  const style = backTitleStyles({top});
  return (
    <View
      style={{
        ...style.container,
        marginTop: mt ? mt : undefined,
        marginBottom: mb ? mb : undefined,
      }}>
      <View style={style.display}>
        <SvgIcons.BackArrowIcon onPress={goBack} />

        <Typography style="Subtitle2" color={palette.Another.Black} ml={8}>
          {text}
        </Typography>
      </View>
      <Profile />
    </View>
  );
};
export default ProfileBackTitleTopBar;
