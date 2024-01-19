import {Pressable} from 'react-native';
import Search from '@/assets/icons/search.svg';
import {commonInputButtonStyles} from '@/styles/Input.style';

interface ISearchButtonProp {
  onPress: () => void;
}
const SearchButton = ({onPress}: ISearchButtonProp) => {
  return (
    <Pressable style={commonInputButtonStyles} onPress={onPress}>
      <Search />
    </Pressable>
  );
};
export default SearchButton;
