import palette from '@/styles/theme/color';
import {Animated, View} from 'react-native';
import Typography from '../typography';
import TooltipSvg from '@/assets/icons/tooltip.svg';
import tooltipStyles from './Tooltip.style';
import {useEffect, useRef} from 'react';

interface ITooltipProp {
  text: string;
  hide?: boolean;
}

const Tooltip = ({text, hide}: ITooltipProp) => {
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const showTooltip = () => {
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    };
    const hideTooltip = () => {
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    };
    const showTimeout = setTimeout(() => {
      showTooltip();
    }, 1000);

    if (hide) {
      setTimeout(() => {
        hideTooltip();
      }, 4000);
    }
    return () => {
      clearTimeout(showTimeout);
    };
  }, [opacityAnim]);

  return (
    <Animated.View style={[tooltipStyles.container, {opacity: opacityAnim}]}>
      <View style={tooltipStyles.typographyWrap}>
        <Typography style="Label3" color={palette.Primary.Dark}>
          {text}
        </Typography>
      </View>
      {!hide && <TooltipSvg />}
    </Animated.View>
  );
};

export default Tooltip;
