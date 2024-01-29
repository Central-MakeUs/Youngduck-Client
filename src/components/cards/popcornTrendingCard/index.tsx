import Typography from '@/components/typography';
import {Image, Pressable} from 'react-native';
import {popcornTrendingCardStyles} from './PopcornTrendingCard.style';
import Chip from '@/components/chip';
import useNavigator from '@/hooks/useNavigator';
import stackScreens from '@/constants/stackScreens';
import {TTrendingData} from '@/models/popcornParty/reponse';

const PopcornTrendingCard = ({
  popcornId,
  movieId,
  movieTitle,
  imageUrl,
  index,
  rank,
  mode,
}: TTrendingData) => {
  const {stackNavigation} = useNavigator();
  const goToPopcornPartyDetail = () =>
    popcornId &&
    stackNavigation.navigate(stackScreens.PopcornPartyDetailScreen, {
      id: popcornId,
    });
  return (
    <Pressable
      style={
        index
          ? popcornTrendingCardStyles.container
          : popcornTrendingCardStyles.firstContainer
      }
      onPress={goToPopcornPartyDetail}>
      <Image source={{uri: imageUrl}} style={popcornTrendingCardStyles.image} />
      {mode === 'with-ranking' && <Chip text={`${rank}위`} mt={4} mb={4} />}
      <Typography style="Label1" numberOfLinesDisabled={1}>
        {movieTitle}
      </Typography>
    </Pressable>
  );
};

export default PopcornTrendingCard;
