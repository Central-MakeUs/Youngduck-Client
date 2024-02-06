import palette from '@/styles/theme/color';
import {Image, Pressable, View} from 'react-native';
import Typography from '../../typography';
import Vote from '../../vote';
import popcornItemStyles from './PopcornItem.style';
import {useState} from 'react';
import {TPopcornRecommendData} from '@/models/popcornParty/reponse';
import useCheckLogin from '@/hooks/useCheckLogin';
import EmptySmall from '@/assets/icons/empty-small.svg';

interface IPopcornItem extends TPopcornRecommendData {
  voteMovieMutate: (id: number) => void;
}

const PopcornItem = ({
  id,
  imageUrl,
  movieTitle,
  recommendationCount,
  recommendationReason,
  movieDirector,
  voteMovieMutate,
}: IPopcornItem) => {
  const {checkLogin} = useCheckLogin();
  const [voteState, setVoteState] = useState(false);
  const [voteCount, setVoteCount] = useState(recommendationCount);

  const handleVoteMovie = () => {
    checkLogin(() => {
      if (voteState) return;
      voteMovieMutate(id);
      setVoteState(true);
      setVoteCount(prev => prev + 1);
    });
  };
  return (
    <Pressable
      style={
        voteState
          ? popcornItemStyles.votedContainer
          : popcornItemStyles.notVotedContainer
      }
      onPress={handleVoteMovie}>
      {!!imageUrl ? (
        <Image
          source={{
            uri: imageUrl,
          }}
          style={popcornItemStyles.image}
        />
      ) : (
        <EmptySmall />
      )}
      <View style={popcornItemStyles.wrap}>
        <View style={{marginBottom: 4}}>
          <View style={popcornItemStyles.contentWrap}>
            <View style={popcornItemStyles.typoWrap}>
              <Typography style="Label1" numberOfLines={1}>
                {movieTitle}
              </Typography>
            </View>
            <View style={popcornItemStyles.contentWrap}>
              <Vote isVoted={voteState} voteCount={voteCount} />
            </View>
          </View>
          <Typography style="Body2">{movieDirector}</Typography>
        </View>
        <Typography style="Chips1" color={palette.Text.Alternative}>
          {recommendationReason}
        </Typography>
      </View>
    </Pressable>
  );
};

export default PopcornItem;
