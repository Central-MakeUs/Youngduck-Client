import {Pressable, View} from 'react-native';
import Typography from '../typography';
import palette from '@/styles/theme/color';
import {categoryInputStyles, categoryInputTypes} from './CategoryInput.style';
import Calendar from '@/assets/icons/calendar.svg';
import DownArrow from '@/assets/icons/down-arrow.svg';
import Time from '@/assets/icons/time.svg';
import Location from '@/assets/icons/location.svg';
import useFocus from '@/hooks/useFocus';

interface CategoryInput {
  placeholder: string;
  category: 'select' | 'time' | 'date' | 'location';
  onPress: () => void;
  value: any;
  title: string;
}

const CategoryInput = ({
  placeholder,
  category,
  onPress,
  value,
  title,
}: CategoryInput) => {
  const {type, onFocus, onBlur} = useFocus();
  return (
    <View>
      <Typography
        style="Label2"
        mb={4}
        color={categoryInputTypes[type].titleColor}>
        {title}
      </Typography>
      <Pressable
        style={[
          categoryInputStyles.container,
          {borderColor: categoryInputTypes[type].borderColor},
        ]}
        onPress={onPress}
        onPressIn={() => onFocus()}
        onPressOut={() => onBlur(value)}>
        <Typography style="Body1" color={palette.Text.Assistive}>
          {placeholder}
        </Typography>
        <View>
          <Calendar />
        </View>
      </Pressable>
    </View>
  );
};
export default CategoryInput;
