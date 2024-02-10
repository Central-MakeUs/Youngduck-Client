import SvgIcons from '@/assets/svgIcons';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {TouchableOpacity, View} from 'react-native';
import titleCenterTopBarStyles from './TitleCenterTopBar.style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useNavigator from '@/hooks/useNavigator';

interface ITitleCenterTopBarProps {
  title: string;
}

const TitleCenterTopBar = ({title}: ITitleCenterTopBarProps) => {
  const {stackNavigation} = useNavigator();
  const {top} = useSafeAreaInsets();
  const style = titleCenterTopBarStyles({top});
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.arrow}
        activeOpacity={0.8}
        onPress={stackNavigation.goBack}>
        <SvgIcons.BackArrowIcon />
      </TouchableOpacity>
      <View style={style.topBar}>
        <Typography style="Label1" color={palette.Another.Black}>
          {title}
        </Typography>
      </View>
    </View>
  );
};

export default TitleCenterTopBar;
