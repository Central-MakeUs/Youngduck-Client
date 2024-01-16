import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {Image, Pressable} from 'react-native';
import {popcornTrendingCardStyles} from './PopcornTrendingCard.style';
import Chip from '@/components/chip';
import useNavigator from '@/hooks/useNavigator';
import stackScreens from '@/constants/stackScreens';
import {IPopcornTrendingCardDatas} from '@/types/popcornParty';

interface IPopcornTrendingCardProps extends IPopcornTrendingCardDatas {
  index: number;
  mode: 'with-ranking' | 'without-ranking';
}

const PopcornTrendingCard = ({
  id,
  title,
  imageURL,
  index,
  mode,
}: IPopcornTrendingCardProps) => {
  const {stackNavigation} = useNavigator();
  const goToPopcornPartyDetail = () =>
    stackNavigation.navigate(stackScreens.PopcornPartyDetailScreen, {id});
  return (
    <Pressable
      style={
        index
          ? popcornTrendingCardStyles.container
          : popcornTrendingCardStyles.firstContainer
      }
      onPress={goToPopcornPartyDetail}>
      <Image source={{uri: imageURL}} style={popcornTrendingCardStyles.image} />
      {mode === 'with-ranking' && (
        <Chip text={`${index + 1}위`} mt={4} mb={4} />
      )}
      <Typography style="Label1" color={palette.Text.Normal}>
        {title}
      </Typography>
    </Pressable>
  );
};

export default PopcornTrendingCard;
