import {View} from 'react-native';
import {useQuery} from '@tanstack/react-query';

import {ScreenRouteProp} from '@/types/navigator';
import stackScreens from '@/constants/stackScreens';
import MyDetailBottomButton from './components/myDetailBottomButton';
import useNavigator from '@/hooks/useNavigator';
import {getScreeningMyDetailContent} from '@/apis/screening/detail';

interface IMyDetailScreenProps {
  route: ScreenRouteProp<stackScreens.MyDetailScreen>;
}
const MyDetailScreen = ({route: {params}}: IMyDetailScreenProps) => {
  const {data} = useQuery({
    queryKey: ['screeningMyDetail'],
    queryFn: () => getScreeningMyDetailContent(params.id),
  });

  const {stackNavigation} = useNavigator();
  const handleGoToWrite = () => {
    if (data) {
      stackNavigation.navigate(stackScreens.WritingScreen, {
        type: 'modified',
        id: params.id,
        search: data.data.location,
      });
    }
  };
  return (
    <View>
      <MyDetailBottomButton
        type="myOpen"
        onPress={() => {}}
        optionPress={handleGoToWrite}
      />
    </View>
  );
};
export default MyDetailScreen;
