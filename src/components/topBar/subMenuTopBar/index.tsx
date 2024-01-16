import SvgIcons from '@/assets/svgIcons';
import Typography from '@/components/typography';

import {CommonMarginVerticalProps} from '@/types/ui';
import {View} from 'react-native';
import {subMenuStyles} from './SubMenuTopBar.style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface SubMenuTopBarProps extends CommonMarginVerticalProps {
  goback: () => void;
  text: string;
}

const SubMenuTopBar = ({text, goback, mb, mt}: SubMenuTopBarProps) => {
  const {top} = useSafeAreaInsets();
  const style = subMenuStyles({top});
  return (
    <View
      style={{
        ...style.container,
        marginTop: mt ? mt : undefined,
        marginBottom: mb ? mb : undefined,
      }}>
      <Typography style="Label1">{text}</Typography>
      <SvgIcons.RightArrowIcon onPress={goback} />
    </View>
  );
};
export default SubMenuTopBar;
