import {StyleSheet, View} from 'react-native';
import Typography from '../typography';

import {CommonMarginVerticalProps, CommonTextProps, IChip} from '@/types/ui';
import {chipStyle, chipStyles} from './Chip.style';

interface ChipProps extends CommonTextProps, CommonMarginVerticalProps {
  state?: IChip;
}

const Chip = ({state = 'primary', text, mt, mb}: ChipProps) => {
  return (
    <View
      style={{
        ...chipStyles.container,
        ...chipStyle[state],
        marginTop: mt ? mt : undefined,
        marginBottom: mb ? mb : undefined,
      }}>
      <Typography style="Label3" color={chipStyle[state].textColor}>
        {text}
      </Typography>
    </View>
  );
};
export default Chip;
