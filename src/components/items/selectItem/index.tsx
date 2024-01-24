import SelectButton from '@/components/buttons/selectButton';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {View} from 'react-native';
import {selectItemStyles} from './SelectItem.style';
import {CommonMarginVerticalProps} from '@/types/ui';

interface ISelectItemProps extends CommonMarginVerticalProps {
  labels: string[];
  onPress: () => void;
  text: string;
}
const SelectItem = ({text, labels, onPress, mt, mb}: ISelectItemProps) => {
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
        {labels.map(label => (
          <SelectButton
            size="small"
            key={label}
            type={label}
            onPress={onPress}
            isSelected={false}
          />
        ))}
      </View>
    </View>
  );
};
export default SelectItem;
