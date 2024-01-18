import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {Image, Pressable, View} from 'react-native';
import movieItemStyles from './MovieItem.style';

interface IMovieItem {
  imageURL: string;
  title: string;
  director: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const MovieItem = ({
  imageURL,
  title,
  director,
  selected,
  setSelected,
}: IMovieItem) => {
  const setRecommandMovie = () => setSelected(title);
  return (
    <Pressable
      style={
        selected === title
          ? movieItemStyles.selectedContainer
          : movieItemStyles.defaultContainer
      }
      onPress={setRecommandMovie}>
      <Image
        source={{
          uri: imageURL,
        }}
        style={movieItemStyles.image}
      />
      <View>
        <Typography style="Label1" color={palette.Text.Strong}>
          {title}
        </Typography>
        <Typography style="Body2">{`감독: ${director}`}</Typography>
      </View>
    </Pressable>
  );
};

export default MovieItem;
