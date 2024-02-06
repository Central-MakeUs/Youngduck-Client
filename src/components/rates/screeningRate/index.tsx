import {Animated, View} from 'react-native';
import Typography from '../../typography';
import {useEffect, useRef, useState} from 'react';
import Tooltip from '../../tooltip';
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

  // 100에서 score만큼 TOOLTIP의 길이를 줄이고 뺌
  const screeningIndexLocation =
    score >= 100
      ? percentageLength - TOOLTIP_MAX_LENGTH
      : (percentageLength * score) / 100 - TOOLTIP_MAX_LENGTH * (score / 100);
  const screeningIndex = score >= 100 ? '100' : score.toString();

  const style = screeningRateStyles({tooltipHeight});

  const marginLeftAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(marginLeftAnim, {
      toValue: screeningIndexLocation,
      duration: 500,
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

  const isScreeningRateMode = mode === 'screeningRate';

  return (
    <View style={style.container}>
      <Typography style={isScreeningRateMode ? 'Label1' : 'Title2'}>
        {isScreeningRateMode ? '상영지수' : '팝콘지수'}
      </Typography>
      <View
        style={style.screeningIndexWrap}
        onLayout={e => setPercentageLength(e.nativeEvent.layout.width)}>
        <Animated.View
          style={[style.tooltip, {marginLeft}]}
          onLayout={e => setTooltipHeight(e.nativeEvent.layout.height)}>
          <Tooltip text={`${screeningIndex}점`} />
          <View style={style.screeningIndex} />
        </Animated.View>
      </View>
      <View style={style.reviewIconWrap}>
        <View style={style.reviewIcon}>
          <DisappointedSvg />
          <Typography style="Label3" mt={4}>
            {isScreeningRateMode ? '아쉽..' : '눅눅..'}
          </Typography>
        </View>
        <View style={style.reviewIcon}>
          <SatisfiedSvg />
          <Typography style="Label3" mt={4}>
            {isScreeningRateMode ? '만족!' : '바삭!'}
          </Typography>
        </View>
      </View>
      {children}
    </View>
  );
};

export default ScreeningRate;
