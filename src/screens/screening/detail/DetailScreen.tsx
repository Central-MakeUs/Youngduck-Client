import {useState} from 'react';
import {View} from 'react-native';

import DetailTitle from './components/detailTitle';
import ImageContentScrollContainer from '@/components/container/imageContentScrollContainer';
import TabBar from '@/components/tabBar';
import BottomDetailButton from './components/bottomDetailButton';
import DetailReviewScreen from './tabs/detailReviewScreen/DetailReviewScreen';
import DetailInfoScreen from './tabs/detailInfoScreen/DetailInfoScreen';
import {ScreenRouteProp} from '@/types/navigator';
import {DetailBottomButtonType} from '@/types/ui';

import {detailScreenStyles} from './DetailScreen.style';

type DetailScreenProps = {
  route: ScreenRouteProp<'DetailScreen'>;
};

const DetailScreen = ({route}: DetailScreenProps) => {
  const {id} = route.params;

  const [currentTab, setCurrentTab] = useState<number>(0);
  const [completeHeart, setCompleteHeart] = useState<boolean>(true);
  const [bottomType, setBottomType] =
    useState<DetailBottomButtonType>('default');

  // tab bar에 필요한 제목들 선언
  const tabBars = [
    {title: '스크리닝 정보', tabNumber: 0},
    {title: '리뷰', tabNumber: 1},
  ];
  return (
    <View style={detailScreenStyles.wrapper}>
      <View style={detailScreenStyles.content}>
        <ImageContentScrollContainer>
          <DetailTitle />

          <TabBar
            currentTabBarNumber={currentTab}
            setCurrentTabBarNumber={setCurrentTab}
            tabBars={tabBars}
          />

          {currentTab === 0 && <DetailInfoScreen />}
          {currentTab === 1 && <DetailReviewScreen />}
        </ImageContentScrollContainer>
      </View>
      <View style={detailScreenStyles.bottom}>
        <BottomDetailButton onPress={() => {}} type={bottomType} />
      </View>
    </View>
  );
};
export default DetailScreen;
