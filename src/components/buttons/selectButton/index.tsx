import Typography from '@/components/typography';
import {TGenre} from '@/types/signup/genre';
import {Pressable} from 'react-native';
import {selectedButtonStyles} from './SelectedButton.style';
import palette from '@/styles/theme/color';

interface ISelectButtonProps {
  onPress: () => void;
  type: TGenre;
  isSelected: boolean;
}

const SelectButton = ({onPress, type, isSelected}: ISelectButtonProps) => {
  return (
    <Pressable
      style={
        isSelected
          ? selectedButtonStyles.selectedButton
          : selectedButtonStyles.defaultButton
      }
      onPress={onPress}>
      <Typography
        style="Body1"
        color={isSelected ? palette.Text.Normal : palette.Text.Alternative}>
        {type}
      </Typography>
    </Pressable>
  );
};

export default SelectButton;
