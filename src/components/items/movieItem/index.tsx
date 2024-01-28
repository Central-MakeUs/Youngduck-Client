import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {Image, Pressable, View} from 'react-native';
import movieItemStyles from './MovieItem.style';
import {IRecommendMovieProps} from '@/types/popcornParty';
import {ISearchMovieDataRequest} from '@/models/popcornParty/request';

interface IMovieItem extends ISearchMovieDataRequest {
  selected: IRecommendMovieProps;
  setSelected: React.Dispatch<React.SetStateAction<IRecommendMovieProps>>;
}

const MovieItem = ({
  poster,
  title,
  directorNm,
  selected,
  movieSeq,
  setSelected,
}: IMovieItem) => {
  const setRecommandMovie = () => setSelected({title, movieSeq});
  return (
    <Pressable
      style={
        selected.title === title && selected.movieSeq === movieSeq
          ? movieItemStyles.selectedContainer
          : movieItemStyles.defaultContainer
      }
      onPress={setRecommandMovie}>
      <Image
        source={
          poster === 'default'
            ? require('../../../assets/images/pacong.png')
            : {uri: poster}
        }
        style={movieItemStyles.image}
      />
      <View>
        <Typography style="Label1" color={palette.Text.Strong}>
          {title}
        </Typography>
        <Typography style="Body2">{`감독: ${directorNm}`}</Typography>
      </View>
    </Pressable>
  );
};

export default MovieItem;
