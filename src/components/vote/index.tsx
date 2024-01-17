import SvgIcons from '@/assets/svgIcons';
import {View} from 'react-native';
import Typography from '../typography';
import palette from '@/styles/theme/color';

interface IVoteProp {
  isVoted: boolean;
  voteCount: number;
}

const Vote = ({isVoted, voteCount}: IVoteProp) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <SvgIcons.Vote
        fill={isVoted ? palette.Primary.Deep : palette.Text.Assistive}
      />
      <Typography
        style="Label3"
        color={isVoted ? palette.Primary.Deep : palette.Text.Assistive}>
        {voteCount.toString()}
      </Typography>
    </View>
  );
};

export default Vote;
