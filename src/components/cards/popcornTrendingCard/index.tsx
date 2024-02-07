import Typography from '@/components/typography';
import {Image, Pressable} from 'react-native';
import Chip from '@/components/chip';
import useNavigator from '@/hooks/useNavigator';
import stackScreens from '@/constants/stackScreens';
import {TTrendingData} from '@/models/popcornParty/reponse';
import useCheckLogin from '@/hooks/useCheckLogin';
import {
  popcornContainerStyles,
  popcornImageStyles,
} from './PopcornTrendingCard.style';
import EmptyLarge from '@/assets/icons/empty-large.svg';
import EmptyMedium from '@/assets/icons/empty-medium.svg';

const PopcornTrendingCard = ({
  popcornId,
  movieTitle,
  imageUrl,
  rank,
  mode,
}: TTrendingData) => {
  const {stackNavigation} = useNavigator();
  const {checkLogin} = useCheckLogin();
  const goToPopcornPartyDetail = () => {
    checkLogin(() => {
      popcornId &&
        stackNavigation.navigate(stackScreens.PopcornPartyDetailScreen, {
          id: popcornId,
        });
    });
  };
  return (
    <Pressable
      style={popcornContainerStyles[mode]}
      onPress={goToPopcornPartyDetail}>
      {imageUrl ? (
        <Image source={{uri: imageUrl}} style={popcornImageStyles[mode]} />
      ) : mode === 'without-ranking' ? (
        <EmptyLarge />
      ) : (
        <EmptyMedium />
      )}

      {mode === 'with-ranking' && <Chip text={`${rank}위`} mt={8} />}
      <Typography style="Label1" numberOfLines={2} mt={4}>
        {movieTitle}
      </Typography>
    </Pressable>
  );
};

export default PopcornTrendingCard;
