import {Pressable} from 'react-native';
import Search from '@/assets/icons/search.svg';
import searchButtonStyle from './SearchButton.style';

interface ISearchButtonProp {
  onPress: () => void;
}
const SearchButton = ({onPress}: ISearchButtonProp) => {
  return (
    <Pressable style={searchButtonStyle.searchButton} onPress={onPress}>
      <Search />
    </Pressable>
  );
};
export default SearchButton;
