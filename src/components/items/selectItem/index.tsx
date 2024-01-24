import {View} from 'react-native';

import SelectButton from '@/components/buttons/selectButton';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {CommonMarginVerticalProps} from '@/types/ui';

import {selectItemStyles} from './SelectItem.style';

interface ISelectItem {
  value: string;
  label: string;
}

interface ISelectItemProps extends CommonMarginVerticalProps {
  labels: ISelectItem[];
  text: string;
  setValue: (value: boolean, option: string) => void;
  value: any;
}
const SelectItem = ({
  text,
  labels,
  setValue,
  mt,
  mb,
  value,
}: ISelectItemProps) => {
  return (
    <View
      style={{
        marginTop: mt ? mt : undefined,
        marginBottom: mb ? mb : undefined,
      }}>
      <Typography mb={8} style="Body2" color={palette.Another.Black}>
        {text}
      </Typography>

      <View style={selectItemStyles.flex}>
        {labels.map(l => (
          <SelectButton
            size="small"
            key={l.label}
            type={l.label}
            onPress={() => setValue(!value[l.value], l.value)}
            isSelected={value[l.value]}
          />
        ))}
      </View>
    </View>
  );
};
export default SelectItem;
