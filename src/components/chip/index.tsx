import {StyleSheet, View} from 'react-native';
import Typography from '../typography';

import {CommonTextProps, IChip} from '@/types/ui';
import {chipStyle, chipStyles} from './Chip.style';

interface ChipProps extends CommonTextProps {
  state?: IChip;
}

const Chip = ({state = 'primary', text}: ChipProps) => {
  return (
    <View style={StyleSheet.compose(chipStyles.container, chipStyle[state])}>
      <Typography style="Label3" color={chipStyle[state].textColor}>
        {text}
      </Typography>
    </View>
  );
};
export default Chip;
