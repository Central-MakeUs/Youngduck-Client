import {CommonMarginVerticalProps} from '@/types/ui';
import subMenuStyles from './SubMenu.style';
import {Pressable} from 'react-native';
import Typography from '../typography';
import SvgIcons from '@/assets/svgIcons';
import {KeyofText} from '@/types/theme/typography';

interface ISubMenuProps extends CommonMarginVerticalProps {
  text: string;
  textStyle?: KeyofText;
  onPress: () => void;
}

const SubMenu = ({
  text,
  textStyle = 'Label1',
  onPress,
  mt,
  mb,
}: ISubMenuProps) => {
  return (
    <Pressable
      style={{
        ...subMenuStyles.container,
        marginTop: mt ? mt : undefined,
        marginBottom: mb ? mb : undefined,
      }}
      onPress={onPress}>
      <Typography style={textStyle}>{text}</Typography>
      <SvgIcons.RightArrowIcon />
    </Pressable>
  );
};

export default SubMenu;
