import palette from '@/styles/theme/color';
import {View} from 'react-native';
import Typography from '../../typography';
import TooltipSvg from '@/assets/icons/tooltip.svg';
import tooltipStyles from './Tooltip.style';

interface ITooltipProp {
  screeningIndex: string;
}

const Tooltip = ({screeningIndex}: ITooltipProp) => {
  return (
    <View style={tooltipStyles.container}>
      <View style={tooltipStyles.typographyWrap}>
        <Typography
          style="Label3"
          color={palette.Primary.Dark}>{`${screeningIndex}점`}</Typography>
      </View>
      <TooltipSvg />
    </View>
  );
};

export default Tooltip;
