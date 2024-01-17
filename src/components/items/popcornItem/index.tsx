import palette from '@/styles/theme/color';
import {Image, Pressable, View} from 'react-native';
import Typography from '../../typography';
import Vote from '../../vote';
import popcornItemStyles from './PopcornItem.style';
import {useState} from 'react';
import {IPopcornItemProps} from '@/types/popcornParty';

const PopcornItem = ({
  id,
  imageURL,
  title,
  count,
  nickname,
  content,
  isVoted,
}: IPopcornItemProps) => {
  const [voteState, setVoteState] = useState(isVoted);

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
        source={{
          uri: imageURL,
        }}
        style={popcornItemStyles.image}
      />
      <View style={popcornItemStyles.contentWrap}>
        <View style={popcornItemStyles.voteWrap}>
          <Typography style="Label1">{title}</Typography>
          <Vote isVoted={voteState} voteCount={count} />
        </View>
        <Typography style="Body2">{nickname}</Typography>
        <Typography style="Chips1" color={palette.Text.Alternative}>
          {content}
        </Typography>
      </View>
    </Pressable>
  );
};

export default PopcornItem;
