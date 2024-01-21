import {CommonMarginVerticalProps} from '@/types/ui';
import {View} from 'react-native';
import Typography from '../typography';
import {useState} from 'react';
import Tooltip from './tooltip';
import screeningIndexStyles from './ScreeningIndex.style';

const ScreeningIndex = ({mt, mb}: CommonMarginVerticalProps) => {
  const [tooltipHeight, setTooltipHeight] = useState<number>(0);
  const [percentageLength, setPercentageLength] = useState<number>(0);
  const screeningIndexLocation = percentageLength * (10 / 13);
  const screeningIndex = ((10 / 13) * 100).toFixed(0);

  const style = screeningIndexStyles({tooltipHeight, screeningIndexLocation});

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
        <View
          style={style.tooltip}
          onLayout={e => setTooltipHeight(e.nativeEvent.layout.height)}>
          <Tooltip screeningIndex={screeningIndex} />
          <View style={style.screeningIndex} />
        </View>
      </View>
    </View>
  );
};

export default ScreeningIndex;
