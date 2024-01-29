import palette from '@/styles/theme/color';
import {Image, Pressable, View} from 'react-native';
import Typography from '../../typography';
import Vote from '../../vote';
import popcornItemStyles from './PopcornItem.style';
import {useState} from 'react';
import {TRandomPopcornRecommendData} from '@/models/popcornParty/reponse';
import {defaultImages} from '@/assets';
import useRecommendMovieMutation from '@/hooks/mutaions/useRecommendMovie';

const PopcornItem = ({
  id,
  imageUrl,
  movieTitle,
  recommendationCount,
  recommendationReason,
  movieDirector,
}: TRandomPopcornRecommendData) => {
  const [voteState, setVoteState] = useState(false);
  const [voteCount, setVoteCount] = useState(recommendationCount);
  const {recommendMovieMutate} = useRecommendMovieMutation();

  const handleVoteMovie = () => {
    if (voteState) return;
    recommendMovieMutate(id);
    setVoteState(true);
    setVoteCount(prev => prev + 1);
  };
  return (
    <Pressable
      style={
        voteState
          ? popcornItemStyles.votedContainer
          : popcornItemStyles.notVotedContainer
      }
      onPress={handleVoteMovie}>
      <Image
        source={
          !!imageUrl
            ? {
                uri: imageUrl,
              }
            : defaultImages.pacong
        }
        style={popcornItemStyles.image}
      />
      <View style={popcornItemStyles.wrap}>
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
        <Typography style="Chips1" color={palette.Text.Alternative}>
          {recommendationReason}
        </Typography>
      </View>
    </Pressable>
  );
};

export default PopcornItem;
