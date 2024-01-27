import SvgIcons from '@/assets/svgIcons';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {View} from 'react-native';
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
      <View style={style.arrow}>
        <SvgIcons.BackArrowIcon onPress={stackNavigation.goBack} />
      </View>
      <View style={style.topBar}>
        <Typography style="Label1" color={palette.Another.Black}>
          {title}
        </Typography>
      </View>
    </View>
  );
};

export default TitleCenterTopBar;
