import {CommonMarginVerticalProps} from '@/types/ui';
import {Animated, View} from 'react-native';
import Typography from '../typography';
import {useEffect, useRef, useState} from 'react';
import Tooltip from './tooltip';
import screeningIndexStyles from './ScreeningIndex.style';
import {Easing} from 'react-native';
import DisappointedSvg from '@/assets/icons/disappointed.svg';
import SatisfiedSvg from '@/assets/icons/satisfied.svg';
import ReviewRate from './reviewRate';

const TOOLTIP_MAX_LENGTH = 47.333343505859375;

const ScreeningIndex = ({mt, mb}: CommonMarginVerticalProps) => {
  const [tooltipHeight, setTooltipHeight] = useState<number>(0);
  const [percentageLength, setPercentageLength] = useState<number>(0);

  // 100점 일 때 tooltip width 값인 47.333...을 빼줌
  const screeningIndexLocation =
    percentageLength * (13 / 13) - TOOLTIP_MAX_LENGTH;
  const screeningIndex = ((13 / 13) * 100).toFixed(0);

  const style = screeningIndexStyles({tooltipHeight});

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
    <View
      style={{
        ...style.container,
        marginTop: mt ? mt : undefined,
        marginBottom: mb ? mb : undefined,
      }}>
      <Typography style="Label1">상영지수</Typography>
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
      <ReviewRate />
    </View>
  );
};

export default ScreeningIndex;
