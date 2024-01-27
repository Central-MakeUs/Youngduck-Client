import Typography from '@/components/typography';
import {Image, Pressable} from 'react-native';
import {popcornTrendingCardStyles} from './PopcornTrendingCard.style';
import Chip from '@/components/chip';
import useNavigator from '@/hooks/useNavigator';
import stackScreens from '@/constants/stackScreens';
import {ITrendingPopcornData} from '@/models/popcornParty/reponse';

interface IPopcornTrendingCardProps extends ITrendingPopcornData {
  index?: number;
  mode: 'with-ranking' | 'without-ranking';
}

const PopcornTrendingCard = ({
  popcornId,
  movieTitle,
  imageUrl,
  index,
  mode,
}: IPopcornTrendingCardProps) => {
  const {stackNavigation} = useNavigator();
  const goToPopcornPartyDetail = () =>
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
      {mode === 'with-ranking' && (
        <Chip text={`${index! + 1}위`} mt={4} mb={4} />
      )}
      <Typography style="Label1">{movieTitle}</Typography>
    </Pressable>
  );
};

export default PopcornTrendingCard;
