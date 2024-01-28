import {useState} from 'react';
import {View} from 'react-native';
import {useQuery} from '@tanstack/react-query';

import DetailTitle from './components/detailTitle';
import ImageContentScrollContainer from '@/components/container/imageContentScrollContainer';
import TabBar from '@/components/tabBar';
import DetailReviewScreen from './tabs/detailReviewScreen/DetailReviewScreen';
import DetailInfoScreen from './tabs/detailInfoScreen/DetailInfoScreen';
import stackScreens from '@/constants/stackScreens';
import {ScreenRouteProp} from '@/types/navigator';
import {DetailBottomButtonType} from '@/types/ui';
import BottomDetailButton from './components/bottomDetailButton';
import {getScreeningDetailContent} from '@/apis/screening/screening';
import {screeningTabBars} from '@/constants/tabBars';

import {detailScreenStyles} from './DetailScreen.style';

type DetailScreenProps = {
  route: ScreenRouteProp<stackScreens.DetailScreen>;
};

const DetailScreen = ({route}: DetailScreenProps) => {
  const {id} = route.params;

  const [currentTab, setCurrentTab] = useState<number>(0);
  const [completeHeart, setCompleteHeart] = useState<boolean>(true);
  const [bottomType, setBottomType] =
    useState<DetailBottomButtonType>('reviewStart');

  const {data} = useQuery({
    queryKey: ['screeningDetail'],
    queryFn: () => getScreeningDetailContent(id),
  });
  return (
    <View style={detailScreenStyles.wrapper}>
      <View style={detailScreenStyles.content}>
        <ImageContentScrollContainer>
          {data && (
            <DetailTitle
              title={data?.data.screeningTitle}
              category={data?.data.category}
            />
          )}
          <TabBar
            currentTabBarNumber={currentTab}
            setCurrentTabBarNumber={setCurrentTab}
            tabBars={screeningTabBars}
          />
          <View>
            {currentTab === 0 && data?.data && (
              <DetailInfoScreen item={data?.data} />
            )}
            {currentTab === 1 && <DetailReviewScreen />}
          </View>
        </ImageContentScrollContainer>
      </View>

      <View style={detailScreenStyles.bottom}>
        <BottomDetailButton
          type="finish"
          onPress={() => {}}
          onOptionPress={() => {
            setCompleteHeart(!completeHeart);
          }}
          heartState={completeHeart}
        />
      </View>
    </View>
  );
};
export default DetailScreen;
