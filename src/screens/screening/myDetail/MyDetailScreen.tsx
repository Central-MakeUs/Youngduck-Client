import {View} from 'react-native';

import {ScreenRouteProp} from '@/types/navigator';
import stackScreens from '@/constants/stackScreens';

interface IMyDetailScreenProps {
  route: ScreenRouteProp<stackScreens.MyDetailScreen>;
}
const MyDetailScreen = ({route: {params}}: IMyDetailScreenProps) => {
  return <View></View>;
};
export default MyDetailScreen;
