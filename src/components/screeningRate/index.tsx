import {CommonMarginVerticalProps} from '@/types/ui';
import {Animated, View} from 'react-native';
import Typography from '../typography';
import {useEffect, useRef, useState} from 'react';
import Tooltip from '../tooltip';
import screeningRateStyles from './ScreeningRate.style';
import {Easing} from 'react-native';
import DisappointedSvg from '@/assets/icons/disappointed.svg';
import SatisfiedSvg from '@/assets/icons/satisfied.svg';
import ReviewRate from './reviewRate';

const TOOLTIP_MAX_LENGTH = 47.333343505859375;

interface IScreeningRate extends CommonMarginVerticalProps {
  score: number;
}
const ScreeningRate = ({score, mt, mb}: IScreeningRate) => {
  const [tooltipHeight, setTooltipHeight] = useState<number>(0);
  const [percentageLength, setPercentageLength] = useState<number>(0);

  // 100점 일 때 tooltip width 값인 47.333...을 빼줌
  const screeningIndexLocation =
    (percentageLength * score) / 100 - TOOLTIP_MAX_LENGTH;
  const screeningIndex = score.toString();

  const reviewLists = [
    {category: '작품 감상', negative: 3, positive: 10},
    {category: '상영 장소', negative: 2, positive: 11},
    {category: '운영 방식', negative: 1, positive: 12},
  ];

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
      {reviewLists.map(reviewList => (
        <ReviewRate
          category={reviewList.category}
          positive={reviewList.positive}
          negative={reviewList.negative}
          key={`${reviewList.category}-review-rate`}
        />
      ))}
    </View>
  );
};

export default ScreeningRate;
