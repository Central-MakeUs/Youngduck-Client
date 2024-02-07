import {View} from 'react-native';

import SelectButton from '@/components/buttons/selectButton';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {CommonMarginVerticalProps} from '@/types/ui';

import {selectItemStyles} from './SelectMultipleButtons.style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

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
const SelectMultipleButtons = ({
  text,
  labels,
  setValue,
  mt,
  mb,
  value,
}: ISelectItemProps) => {
  const {bottom} = useSafeAreaInsets();
  const styles = selectItemStyles({bottom});
  return (
    <View
      style={{
        marginTop: mt ? mt : undefined,
        marginBottom: mb ? mb : undefined,
      }}>
      <Typography mb={8} style="Body2" color={palette.Another.Black}>
        {text}
      </Typography>

      <View style={styles.flex}>
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
export default SelectMultipleButtons;
