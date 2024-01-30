import {useState} from 'react';
import {View} from 'react-native';
import {useQuery} from '@tanstack/react-query';

import {ScreenRouteProp} from '@/types/navigator';
import stackScreens from '@/constants/stackScreens';
import MyDetailBottomButton from './components/myDetailBottomButton';
import ImageContentScrollContainer from '@/components/container/imageContentScrollContainer';
import ScreeningTitle from '@/components/title/screeningTitle';
import {myScreeningTabBars} from '@/constants/tabBars';
import DetailInfoPage from '@/components/pages/detailInfoPage';
import DetailReviewPage from '@/components/pages/detailReviewPage';
import DetailStatisticScreen from '@/components/pages/detailStatisticPage';
import TabBar from '@/components/tabBar';
import useNavigator from '@/hooks/useNavigator';
import {getScreeningMyDetailContent} from '@/apis/screening/detail';
import useScreeningMutation from '@/hooks/mutaions/useScreeningMutation';

import {myDetailScreenStyles} from './MyDetailScree.style';

interface IMyDetailScreenProps {
  route: ScreenRouteProp<stackScreens.MyDetailScreen>;
}
const MyDetailScreen = ({route: {params}}: IMyDetailScreenProps) => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const {stackNavigation} = useNavigator();
  const {uploadScreeningPrivate} = useScreeningMutation();

  const {data} = useQuery({
    queryKey: ['screeningMyDetail'],
    queryFn: () => getScreeningMyDetailContent(params.id),
  });

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
    <View style={myDetailScreenStyles.wrapper}>
      <View style={myDetailScreenStyles.content}>
        <ImageContentScrollContainer>
          {data && (
            <ScreeningTitle
              title={data?.data.screeningTitle}
              category={data?.data.category}
            />
          )}
          <TabBar
            currentTabBarNumber={currentTab}
            setCurrentTabBarNumber={setCurrentTab}
            tabBars={myScreeningTabBars}
          />

          <View>
            {currentTab === 0 && data?.data && (
              <DetailInfoPage item={data?.data} />
            )}
            {currentTab === 1 && <DetailReviewPage id={params.id} />}
            {currentTab === 2 && <DetailStatisticScreen />}
          </View>
        </ImageContentScrollContainer>
      </View>
      <View style={myDetailScreenStyles.bottom}>
        {data && (
          <MyDetailBottomButton
            type={data.data.private ? 'myClose' : 'myOpen'}
            onPress={handlePrivateOption}
            optionPress={handleGoToWrite}
          />
        )}
      </View>
    </View>
  );
};
export default MyDetailScreen;
