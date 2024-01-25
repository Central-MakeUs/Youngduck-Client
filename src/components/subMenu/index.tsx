import {CommonMarginVerticalProps} from '@/types/ui';
import subMenuStyles from './SubMenu.style';
import {Pressable} from 'react-native';
import Typography from '../typography';
import SvgIcons from '@/assets/svgIcons';

interface ISubMenuProps extends CommonMarginVerticalProps {
  text: string;
  onPress: () => void;
}

const SubMenu = ({text, onPress}: ISubMenuProps) => {
  return (
    <Pressable style={subMenuStyles.container} onPress={onPress}>
      <Typography style="Label1">{text}</Typography>
      <SvgIcons.RightArrowIcon />
    </Pressable>
  );
};

export default SubMenu;
