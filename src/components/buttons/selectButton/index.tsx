import Typography from '@/components/typography';
import {Pressable} from 'react-native';
import {selectedButtonStyles} from './SelectedButton.style';
import palette from '@/styles/theme/color';

interface ISelectButtonProps<T = string> {
  onPress: () => void;
  type: T;
  isSelected: boolean;
  size?: 'large' | 'small';
}

const SelectButton = <T extends string>({
  onPress,
  type,
  isSelected,
  size = 'large',
}: ISelectButtonProps<T>) => {
  return (
    <Pressable
      style={
        isSelected
          ? selectedButtonStyles.selectedButton
          : selectedButtonStyles.defaultButton
      }
      onPress={onPress}>
      <Typography
        style={size === 'large' ? 'Body1' : 'Body2'}
        color={isSelected ? palette.Text.Normal : palette.Text.Alternative}>
        {type}
      </Typography>
    </Pressable>
  );
};

export default SelectButton;
