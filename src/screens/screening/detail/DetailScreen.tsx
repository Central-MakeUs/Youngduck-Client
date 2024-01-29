import {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useQuery} from '@tanstack/react-query';

import DetailTitle from './components/detailTitle';
import ImageContentScrollContainer from '@/components/container/imageContentScrollContainer';
import TabBar from '@/components/tabBar';
import DetailReviewScreen from './tabs/detailReviewScreen/DetailReviewScreen';
import DetailInfoScreen from './tabs/detailInfoScreen/DetailInfoScreen';
import stackScreens from '@/constants/stackScreens';
import {ScreenRouteProp} from '@/types/navigator';
import BottomDetailButton from './components/bottomDetailButton';
import useNavigator from '@/hooks/useNavigator';
import {getScreeningDetailContent} from '@/apis/screening/detail';
import {screeningTabBars} from '@/constants/tabBars';
import useScreeningType from './hooks/useScreeningType';

import {detailScreenStyles} from './DetailScreen.style';

type DetailScreenProps = {
  route: ScreenRouteProp<stackScreens.DetailScreen>;
};

const DetailScreen = ({route}: DetailScreenProps) => {
  const {id} = route.params;
  const {stackNavigation} = useNavigator();

  const [currentTab, setCurrentTab] = useState<number>(0);
  const [completeHeart, setCompleteHeart] = useState<boolean>(true);

  const {buttonType, setDetailButtonType, buttonOnPress} = useScreeningType();

  const {data, status} = useQuery({
    queryKey: ['screeningDetail'],
    queryFn: () => getScreeningDetailContent(id),
  });

  useEffect(() => {
    if (status === 'success') {
      //console.log('제목 이름', data.data.screeningTitle);
      //console.log('리뷰 했는지', data?.data.reviewed);
      //console.log('찜했는지', data?.data.bookmarked);
      setDetailButtonType(
        data?.data.reviewed,
        data?.data.bookmarked,
        data?.data.screeningEndDate,
      );
    }
  }, [data]);

  // 하단 box button 클릭 시
  const handleBottomButtonPress = () => {
    //if (buttonType === 'reviewStart') {
    //  stackNavigation.navigate(stackScreens.ReviewWritingScreen, {id});
    //}
    buttonOnPress();
  };

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
            {currentTab === 1 && <DetailReviewScreen id={id} />}
          </View>
        </ImageContentScrollContainer>
      </View>

      <View style={detailScreenStyles.bottom}>
        <BottomDetailButton
          type={buttonType}
          onPress={handleBottomButtonPress}
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
