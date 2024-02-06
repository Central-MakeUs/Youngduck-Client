import {useEffect, useRef} from 'react';
import {Animated, View} from 'react-native';

import Typography from '../typography';
import TooltipSvg from '@/assets/icons/tooltip.svg';
import BlueTooltipSvg from '@/assets/icons/blue-tooltip.svg';

import tooltipStyles, {tooltipTypeStyles} from './Tooltip.style';

interface ITooltipProp {
  text: string;
  hide?: boolean;
  type?: 'primary' | 'secondary';
  side?: 'center' | 'right';
}

const Tooltip = ({
  text,
  hide,
  type = 'primary',
  side = 'center',
}: ITooltipProp) => {
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
    <Animated.View
      style={[
        tooltipStyles.container,
        {
          alignItems: side === 'center' ? 'center' : 'flex-end',
        },
        {opacity: opacityAnim},
      ]}>
      <View style={[tooltipStyles.typographyWrap, tooltipTypeStyles[type]]}>
        <Typography
          style={tooltipTypeStyles[type].font}
          color={tooltipTypeStyles[type].textColor}>
          {text}
        </Typography>
      </View>
      <View style={{marginRight: side === 'right' ? 15 : undefined}}>
        {type === 'primary' ? <TooltipSvg /> : <BlueTooltipSvg />}
      </View>
    </Animated.View>
  );
};

export default Tooltip;
