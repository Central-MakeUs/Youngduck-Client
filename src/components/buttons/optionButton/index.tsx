import SvgIcons from '@/assets/svgIcons';
import palette from '@/styles/theme/color';
import {TouchableOpacity} from 'react-native';
import {
  optionStyles,
  optionTypDetailStyles,
  optionTypeStyles,
} from './OptionButton.style';
import {OptionButtonType} from '@/types/ui';

interface OptionButtonProps {
  type: OptionButtonType;
  isSelected?: boolean;
  onPress?: () => void;
  disabled?: boolean;
}
const OptionButton = ({
  type,
  isSelected = false,
  onPress,
  disabled = false,
}: OptionButtonProps) => {
  const concept = isSelected ? 'selected' : 'nonSelected';
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        optionStyles.container,
        optionTypeStyles[concept],
        optionTypDetailStyles[type],
      ]}
      disabled={disabled}
      onPress={onPress}>
      {type === 'alarm' && (
        <SvgIcons.Alram
          fill={isSelected ? palette.Primary.Dark : palette.Fill.Strong}
        />
      )}
      {type === 'heart' && (
        <SvgIcons.Heart
          fill={isSelected ? palette.Primary.Dark : palette.Fill.Strong}
        />
      )}
      {type === 'write' && (
        <SvgIcons.Pencil
          fill={isSelected ? palette.Primary.Dark : palette.Fill.Strong}
        />
      )}
    </TouchableOpacity>
  );
};
export default OptionButton;
