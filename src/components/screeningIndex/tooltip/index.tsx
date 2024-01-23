import palette from '@/styles/theme/color';
import {Animated, View} from 'react-native';
import Typography from '../../typography';
import TooltipSvg from '@/assets/icons/tooltip.svg';
import tooltipStyles from './Tooltip.style';
import {useEffect, useRef} from 'react';

interface ITooltipProp {
  screeningIndex: string;
}

const Tooltip = ({screeningIndex}: ITooltipProp) => {
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      clearTimeout(timer);
    }, 2000);
  }, [opacityAnim]);

  return (
    <Animated.View style={[tooltipStyles.container, {opacity: opacityAnim}]}>
      <View style={tooltipStyles.typographyWrap}>
        <Typography
          style="Label3"
          color={palette.Primary.Dark}>{`${screeningIndex}점`}</Typography>
      </View>
      <TooltipSvg />
    </Animated.View>
  );
};

export default Tooltip;
