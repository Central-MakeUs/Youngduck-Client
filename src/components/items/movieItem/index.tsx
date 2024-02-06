import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {Image, Pressable, View} from 'react-native';
import movieItemStyles from './MovieItem.style';
import {
  IRecommendMovieProps,
  ISearchMovieDataProps,
} from '@/types/popcornParty';
import EmptyMovie from '@/assets/icons/empty-movie.svg';

interface IMovieItem extends ISearchMovieDataProps {
  selected: IRecommendMovieProps;
  setSelected: React.Dispatch<React.SetStateAction<IRecommendMovieProps>>;
}

const MovieItem = ({
  poster,
  title,
  directorNm,
  selected,
  movieSeq,
  movieId,
  setSelected,
}: IMovieItem) => {
  const setRecommandMovie = () => setSelected({title, movieId, movieSeq});
  return (
    <Pressable
      style={
        selected.title === title && selected.movieSeq === movieSeq
          ? movieItemStyles.selectedContainer
          : movieItemStyles.defaultContainer
      }
      onPress={setRecommandMovie}>
      {poster === 'default' ? (
        <EmptyMovie width={44} height={44} />
      ) : (
        <Image source={{uri: poster}} style={movieItemStyles.image} />
      )}

      <View style={{marginLeft: 8}}>
        <Typography style="Label1" color={palette.Text.Strong}>
          {title}
        </Typography>
        <Typography style="Body2">{`감독: ${directorNm}`}</Typography>
      </View>
    </Pressable>
  );
};

export default MovieItem;
