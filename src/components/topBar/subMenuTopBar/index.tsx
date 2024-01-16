import SvgIcons from '@/assets/svgIcons';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {CommonMarginVerticalProps} from '@/types/ui';
import {View} from 'react-native';
import {subMenuStyles} from './SubMenuTopBar.style';
import TopBarContainer from '@/components/container/topBarContainer';

interface SubMenuTopBarProps extends CommonMarginVerticalProps {
  goback: () => void;
  text: string;
}

const SubMenuTopBar = ({text, goback, mb, mt}: SubMenuTopBarProps) => {
  return (
    <TopBarContainer>
      <View
        style={{
          ...subMenuStyles.container,
          marginTop: mt ? mt : undefined,
          marginBottom: mb ? mb : undefined,
        }}>
        <Typography style="Label1" color={palette.Text.Normal}>
          {text}
        </Typography>
        <SvgIcons.RightArrowIcon onPress={goback} />
      </View>
    </TopBarContainer>
  );
};
export default SubMenuTopBar;
