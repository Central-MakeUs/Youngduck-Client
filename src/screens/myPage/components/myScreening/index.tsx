import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {Pressable} from 'react-native';
import myScreeningStyles from './MyScreening.style';
import useNavigator from '@/hooks/useNavigator';
import stackScreens from '@/constants/stackScreens';
import {IScreeningDataProps} from '@/models/myPage/response';

interface IMyScreeningProps {
  type: string;
  screeningData: IScreeningDataProps;
  count: number;
}

const MyScreening = ({type, screeningData, count}: IMyScreeningProps) => {
  const {stackNavigation} = useNavigator();
  return (
    <Pressable
      style={myScreeningStyles.buttonWrap}
      onPress={() =>
        stackNavigation.navigate(stackScreens.ManageScreeningScreen, {
          isWatcedScreening: type === '관람한 스크리닝',
          screeningData: screeningData,
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
