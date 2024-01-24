import {TouchableOpacity} from 'react-native';
import Search from '@/assets/icons/search.svg';
import {commonInputButtonStyles} from '@/styles/Input.style';

interface ISearchButtonProp {
  onPress: () => void;
}
const SearchButton = ({onPress}: ISearchButtonProp) => {
  return (
    <TouchableOpacity
      style={commonInputButtonStyles}
      onPress={onPress}
      activeOpacity={0.8}>
      <Search />
    </TouchableOpacity>
  );
};
export default SearchButton;
