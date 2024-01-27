import {Animated, View} from 'react-native';
import Typography from '../typography';
import {useEffect, useRef, useState} from 'react';
import Tooltip from '../tooltip';
import screeningRateStyles from './ScreeningRate.style';
import {Easing} from 'react-native';
import DisappointedSvg from '@/assets/icons/disappointed.svg';
import SatisfiedSvg from '@/assets/icons/satisfied.svg';

const TOOLTIP_MAX_LENGTH = 47.333343505859375;

interface IScreeningRate {
  score: number;
  mode: 'screeningRate' | 'popcornRate';
  children: React.ReactNode;
}
const ScreeningRate = ({score, mode, children}: IScreeningRate) => {
  const [tooltipHeight, setTooltipHeight] = useState<number>(0);
  const [percentageLength, setPercentageLength] = useState<number>(0);

  // 100점 일 때 tooltip width 값인 47.333...을 빼줌
  const screeningIndexLocation =
    (percentageLength * score) / 100 - TOOLTIP_MAX_LENGTH;
  const screeningIndex = score.toString();

  const style = screeningRateStyles({tooltipHeight});

  const marginLeftAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(marginLeftAnim, {
      toValue: screeningIndexLocation,
      duration: 1500,
      delay: 500,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: false,
    }).start();
  }, [marginLeftAnim, screeningIndexLocation]);

  const marginLeft = marginLeftAnim.interpolate({
    inputRange: [0, percentageLength],
    outputRange: [0, percentageLength],
    extrapolate: 'clamp',
  });

  return (
    <View style={style.container}>
      <Typography style={mode === 'screeningRate' ? 'Label1' : 'Title2'}>
        {mode === 'screeningRate' ? '상영지수' : '팝콘지수'}
      </Typography>
      <View
        style={style.screeningIndexWrap}
        onLayout={e => setPercentageLength(e.nativeEvent.layout.width)}>
        <Animated.View
          style={[style.tooltip, {marginLeft}]}
          onLayout={e => setTooltipHeight(e.nativeEvent.layout.height)}>
          <Tooltip screeningIndex={screeningIndex} />
          <View style={style.screeningIndex} />
        </Animated.View>
      </View>
      <View style={style.reviewIconWrap}>
        <View style={style.reviewIcon}>
          <DisappointedSvg />
          <Typography style="Label3" mt={4}>
            아쉽..
          </Typography>
        </View>
        <View style={style.reviewIcon}>
          <SatisfiedSvg />
          <Typography style="Label3" mt={4}>
            만족!
          </Typography>
        </View>
      </View>
      {children}
    </View>
  );
};

export default ScreeningRate;
