import Typography from '@/components/typography';
import {Image, Pressable} from 'react-native';
import Chip from '@/components/chip';
import useNavigator from '@/hooks/useNavigator';
import stackScreens from '@/constants/stackScreens';
import {TTrendingData} from '@/models/popcornParty/reponse';
import {defaultImages} from '@/assets';
import useCheckLogin from '@/hooks/useCheckLogin';
import {
  popcornContainerStyles,
  popcornImageStyles,
} from './PopcornTrendingCard.style';

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
      <Image
        source={imageUrl ? {uri: imageUrl} : defaultImages.emptyLarge}
        style={popcornImageStyles[mode]}
      />
      {mode === 'with-ranking' && <Chip text={`${rank}위`} mt={4} mb={4} />}
      <Typography style="Label1" numberOfLines={1}>
        {movieTitle}
      </Typography>
    </Pressable>
  );
};

export default PopcornTrendingCard;
