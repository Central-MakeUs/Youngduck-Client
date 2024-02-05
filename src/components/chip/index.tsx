import {View} from 'react-native';
import Typography from '../typography';

import {CommonMarginVerticalProps, IChip} from '@/types/ui';
import {chipStyle, chipStyles} from './Chip.style';

interface ChipProps<T = string> extends CommonMarginVerticalProps {
  state?: IChip;
  text: T;
}

const Chip = <T extends string>({
  state = 'primary',
  text,
  mt,
  mb,
}: ChipProps<T>) => {
  return (
    <View
      style={{
        ...chipStyles.container,
        ...chipStyle[state],
        borderWidth: state === 'secondary' ? 1 : undefined,
        borderRadius: state === 'secondary' ? 8 : 4,
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
