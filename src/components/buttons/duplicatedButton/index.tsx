import {Pressable} from 'react-native';
import {duplicatedStyles} from './DuplicatedButton.style';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

interface IDuplicatedProps {
  value: string;
  isDuplicated: boolean;
  onPress: () => void;
}
const DuplicatedButton = ({value, isDuplicated, onPress}: IDuplicatedProps) => {
  return (
    <Pressable
      style={
        value.length >= 2 && isDuplicated
          ? duplicatedStyles.activated
          : duplicatedStyles.deActivated
      }
      onPress={onPress}>
      <Typography
        style="Chips2"
        color={
          value.length >= 2 && isDuplicated
            ? palette.Primary.Deep
            : palette.Text.Alternative
        }>
        중복확인
      </Typography>
    </Pressable>
  );
};
export default DuplicatedButton;
