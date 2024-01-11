import {View} from 'react-native';
import Typography from '../typography';

import {CommonTextProps} from '@/types/ui';
import palette from '@/styles/theme/color';
import {numberingStyles} from './Numbering.style';

const Numbering = ({text}: CommonTextProps) => {
  return (
    <View
      style={[
        numberingStyles.container,
        text.length === 1
          ? numberingStyles.onePadding
          : numberingStyles.twoPadding,
      ]}>
      <Typography style="Label1" color={palette.Another.White}>
        {text}
      </Typography>
    </View>
  );
};
export default Numbering;
