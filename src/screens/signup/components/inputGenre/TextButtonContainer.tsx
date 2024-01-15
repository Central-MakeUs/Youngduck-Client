import {View} from 'react-native';
import inputGenreStyles from './InputGenre.style';

interface ITextButtonContainerProps {
  children: React.ReactNode;
  mb?: number;
}

const TextButtonContainer = ({children, mb}: ITextButtonContainerProps) => {
  return (
    <View
      style={{
        ...inputGenreStyles.textButtonContainer,
        marginBottom: mb ? mb : undefined,
      }}>
      {children}
    </View>
  );
};

export default TextButtonContainer;
