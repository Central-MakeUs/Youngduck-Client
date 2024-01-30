import {View} from 'react-native';

import {ScreenRouteProp} from '@/types/navigator';
import stackScreens from '@/constants/stackScreens';
import MyDetailBottomButton from './components/myDetailBottomButton';
import useNavigator from '@/hooks/useNavigator';

interface IMyDetailScreenProps {
  route: ScreenRouteProp<stackScreens.MyDetailScreen>;
}
const MyDetailScreen = ({route: {params}}: IMyDetailScreenProps) => {
  const {stackNavigation} = useNavigator();
  const handleGoToWrite = () => {
    stackNavigation.navigate(stackScreens.WritingScreen, {
      type: 'modified',
      id: 2,
      search: 'test',
    });
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
