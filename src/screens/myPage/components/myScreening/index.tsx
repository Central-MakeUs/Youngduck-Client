import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {Pressable} from 'react-native';
import myScreeningStyles from './MyScreening.style';

interface IMyScreeningProps {
  type: string;
  count: number;
}

const MyScreening = ({type, count}: IMyScreeningProps) => {
  return (
    <Pressable style={myScreeningStyles.buttonWrap}>
      <Typography style="Label2" color={palette.Text.Strong}>
        {count.toString()}
      </Typography>
      <Typography style="Chips1" color={palette.Text.Alternative}>
        {type}
      </Typography>
    </Pressable>
  );
};

export default MyScreening;
