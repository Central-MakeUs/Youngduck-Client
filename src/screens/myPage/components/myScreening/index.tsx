import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {Pressable} from 'react-native';
import myScreeningStyles from './MyScreening.style';
import useNavigator from '@/hooks/useNavigator';
import stackScreens from '@/constants/stackScreens';

interface IMyScreeningProps {
  type: string;
  count: number;
}

const MyScreening = ({type, count}: IMyScreeningProps) => {
  const {stackNavigation} = useNavigator();
  return (
    <Pressable
      style={myScreeningStyles.buttonWrap}
      onPress={() =>
        stackNavigation.navigate(stackScreens.ManageScreening, {
          isWatcedScreening: type === '관람한 스크리닝',
        })
      }>
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
