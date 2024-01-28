import {useState} from 'react';
import {View} from 'react-native';

import DetailTitle from './components/detailTitle';
import ImageContentScrollContainer from '@/components/container/imageContentScrollContainer';
import TabBar from '@/components/tabBar';

import DetailReviewScreen from './tabs/detailReviewScreen/DetailReviewScreen';
import DetailInfoScreen from './tabs/detailInfoScreen/DetailInfoScreen';
import DetailStatisticScreen from './tabs/detailStatisticScreen/DetailStatisticScreen';
import stackScreens from '@/constants/stackScreens';
import {ScreenRouteProp} from '@/types/navigator';
import {DetailBottomButtonType} from '@/types/ui';
import {
  BottomDetailButton,
  BottomOptionDetailButton,
} from './components/bottomDetailButton';

import {detailScreenStyles} from './DetailScreen.style';

type DetailScreenProps = {
  route: ScreenRouteProp<stackScreens.DetailScreen>;
};

const DetailScreen = ({route}: DetailScreenProps) => {
  const {id} = route.params;

  console.log('아이디', id);

  const [currentTab, setCurrentTab] = useState<number>(0);
  const [completeHeart, setCompleteHeart] = useState<boolean>(true);
  const [bottomType, setBottomType] =
    useState<DetailBottomButtonType>('reviewStart');

  // tab bar에 필요한 제목들 선언
  const tabBars = [
    {title: '스크리닝 정보', tabNumber: 0},
    {title: '리뷰', tabNumber: 1},
    {title: '통계', tabNumber: 2},
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
          <View>
            {currentTab === 0 && <DetailInfoScreen />}
            {currentTab === 1 && <DetailReviewScreen />}
            {currentTab === 2 && <DetailStatisticScreen />}
          </View>
        </ImageContentScrollContainer>
      </View>

      <View style={detailScreenStyles.bottom}>
        <BottomOptionDetailButton
          onPress={() => {}}
          type={'reviewStart'}
          heartState={completeHeart}
          onOptionPress={() => {
            setCompleteHeart(!completeHeart);
          }}
        />
        {/*<BottomDetailButton type="default" onPress={() => {}} />*/}
      </View>
    </View>
  );
};
export default DetailScreen;
