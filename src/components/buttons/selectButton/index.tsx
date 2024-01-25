import Typography from '@/components/typography';
import {Pressable} from 'react-native';
import {selectedButtonStyles} from './SelectedButton.style';
import palette from '@/styles/theme/color';

interface ISelectButtonProps {
  onPress: () => void;
  type: string;
  isSelected: boolean;
  size?: 'large' | 'small';
}

const SelectButton = ({
  onPress,
  type,
  isSelected,
  size = 'large',
}: ISelectButtonProps) => {
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
