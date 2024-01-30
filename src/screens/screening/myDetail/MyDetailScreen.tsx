import {View} from 'react-native';
import {useQuery} from '@tanstack/react-query';

import {ScreenRouteProp} from '@/types/navigator';
import stackScreens from '@/constants/stackScreens';
import MyDetailBottomButton from './components/myDetailBottomButton';
import useNavigator from '@/hooks/useNavigator';
import {getScreeningMyDetailContent} from '@/apis/screening/detail';
import useScreeningMutation from '@/hooks/mutaions/useScreeningMutation';

interface IMyDetailScreenProps {
  route: ScreenRouteProp<stackScreens.MyDetailScreen>;
}
const MyDetailScreen = ({route: {params}}: IMyDetailScreenProps) => {
  const {uploadScreeningPrivate} = useScreeningMutation();
  const {data} = useQuery({
    queryKey: ['screeningMyDetail'],
    queryFn: () => getScreeningMyDetailContent(params.id),
  });

  const {stackNavigation} = useNavigator();
  // 작성하기 페이지 수정 타입으로 이동
  const handleGoToWrite = () => {
    if (data) {
      stackNavigation.navigate(stackScreens.WritingScreen, {
        type: 'modified',
        id: params.id,
        search: data.data.location,
      });
    }
  };
  // 나의 작성하기 비공개 및 공개 처리
  const handlePrivateOption = async () => {
    await uploadScreeningPrivate.mutateAsync(params.id);
  };

  return (
    <View>
      {data && (
        <MyDetailBottomButton
          type={data.data.private ? 'myClose' : 'myOpen'}
          onPress={handlePrivateOption}
          optionPress={handleGoToWrite}
        />
      )}
    </View>
  );
};
export default MyDetailScreen;
