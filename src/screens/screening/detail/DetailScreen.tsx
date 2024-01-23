import {View} from 'react-native';
import DetailReviewScreen from './tabs/detailReviewScreen/DetailReviewScreen';

import {ScreenRouteProp} from '@/types/navigator';
import DetailTitle from './components/detailTitle';
import DetailInfoScreen from './tabs/detailInfoScreen/DetailInfoScreen';
import ImageContentScrollContainer from '@/components/container/imageContentScrollContainer';
import {useState} from 'react';
import TabBar from '@/components/tabBar';

type DetailScreenProps = {
  route: ScreenRouteProp<'DetailScreen'>;
};

const DetailScreen = ({route}: DetailScreenProps) => {
  const {id} = route.params;

  const [currentTab, setCurrentTab] = useState<number>(0);

  // tab bar에 필요한 제목들 선언
  const tabBars = [
    {title: '스크리닝 정보', tabNumber: 0},
    {title: '리뷰', tabNumber: 1},
  ];
  return (
    <ImageContentScrollContainer>
      <View>
        <DetailTitle />

        <TabBar
          currentTabBarNumber={currentTab}
          setCurrentTabBarNumber={setCurrentTab}
          tabBars={tabBars}
        />

        {currentTab === 0 && <DetailInfoScreen />}
        {currentTab === 1 && <DetailReviewScreen />}
      </View>
    </ImageContentScrollContainer>
  );
};
export default DetailScreen;
