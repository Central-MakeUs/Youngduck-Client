import SvgIcons from '@/assets/svgIcons';
import palette from '@/styles/theme/color';
import {TouchableOpacity} from 'react-native';
import {optionStyles, optionTypeStyles} from './OptionButton.style';

interface OptionButtonProps {
  type: 'heart' | 'alram';
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
        {
          paddingHorizontal: type === 'heart' ? 16 : 12,
          paddingVertical: type === 'heart' ? 17 : 10.5,
        },
      ]}
      disabled={disabled}
      onPress={onPress}>
      {type === 'alram' && (
        <SvgIcons.Alram
          fill={isSelected ? palette.Primary.Dark : palette.Fill.Strong}
        />
      )}
      {type === 'heart' && (
        <SvgIcons.Heart
          fill={isSelected ? palette.Primary.Dark : palette.Fill.Strong}
        />
      )}
    </TouchableOpacity>
  );
};
export default OptionButton;
