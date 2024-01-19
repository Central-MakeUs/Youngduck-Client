import SvgIcons from '@/assets/svgIcons';
import palette from '@/styles/theme/color';
import {TouchableOpacity} from 'react-native';
import {heartStyles, heartTypeStyles} from './HeartButton.style';

interface HeartButtonProps {
  isSelected: boolean;
  onPress: () => void;
}
const HeartButton = ({isSelected, onPress}: HeartButtonProps) => {
  const type = isSelected ? 'selected' : 'nonSelected';
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[heartStyles.container, heartTypeStyles[type]]}
      onPress={onPress}>
      <SvgIcons.Heart
        fill={isSelected ? palette.Primary.Dark : palette.Fill.Strong}
      />
    </TouchableOpacity>
  );
};
export default HeartButton;
