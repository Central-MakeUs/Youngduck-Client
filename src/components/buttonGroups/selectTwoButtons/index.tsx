import {View} from 'react-native';

import SelectButton from '@/components/buttons/selectButton';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {selectTwoButtonStyle} from './selectTwoButtons.tyle';
import SubTitle from '@/components/title/subTitle';
import {CommonMarginVerticalProps} from '@/types/ui';

interface ISelectButtonProps extends CommonMarginVerticalProps {
  labels: string[];
  setValue: (value: boolean, option: string) => void;
  option: string;
  value: boolean | undefined;
  title?: string;
  subtitle?: string;
}

const SelectTwoButton = ({
  labels,
  setValue,
  value,
  title,
  subtitle,
  option,
  mt,
  mb,
}: ISelectButtonProps) => {
  return (
    <View
      style={{
        marginTop: mt ? mt : undefined,
        marginBottom: mb ? mb : undefined,
      }}>
      {title && <SubTitle mb={9} text={title} />}
      {subtitle && (
        <Typography mb={8} ml={16} style="Body2" color={palette.Another.Black}>
          {subtitle}
        </Typography>
      )}

      <View style={selectTwoButtonStyle.container}>
        {labels.map((label, index) => (
          <SelectButton
            size="small"
            key={label}
            type={label}
            onPress={() => {
              if (value === undefined) {
                setValue(index === 0 ? true : false, option);
              } else {
                if (value === true && index === 1) {
                  setValue(!value, option);
                }
                if (value === false && index === 0) {
                  setValue(!value, option);
                }
              }
            }}
            isSelected={
              value !== undefined ? (index === 0 ? value : !value) : false
            }
          />
        ))}
      </View>
    </View>
  );
};

export default SelectTwoButton;
