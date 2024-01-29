import palette from '@/styles/theme/color';
import {Image, Pressable, View} from 'react-native';
import Typography from '../../typography';
import Vote from '../../vote';
import popcornItemStyles from './PopcornItem.style';
import {useState} from 'react';
import {IPopcornItemProps} from '@/types/popcornParty';
import {TRandomPopcornRecommendData} from '@/models/popcornParty/reponse';
import {defaultImages} from '@/assets';

const PopcornItem = ({
  id,
  imageUrl,
  movieId,
  movieTitle,
  recommendationCount,
  recommendationReason,
  movieDirector,
}: // isVoted,
TRandomPopcornRecommendData) => {
  const [voteState, setVoteState] = useState(false);

  const toggleVoteState = () => setVoteState(!voteState);
  return (
    <Pressable
      style={
        voteState
          ? popcornItemStyles.votedContainer
          : popcornItemStyles.notVotedContainer
      }
      onPress={toggleVoteState}>
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
            <Typography style="Label1" numberOfLinesDisabled={1}>
              {movieTitle}
            </Typography>
          </View>
          <View style={popcornItemStyles.contentWrap}>
            <Vote isVoted={voteState} voteCount={recommendationCount} />
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
