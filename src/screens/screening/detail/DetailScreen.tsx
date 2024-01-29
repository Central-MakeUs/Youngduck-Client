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
import {getScreeningDetailContent} from '@/apis/screening/detail';
import {screeningTabBars} from '@/constants/tabBars';
import useScreeningType from './hooks/useScreeningType';
import Popup from '@/components/popup';
import {useWebviewStore} from '@/stores/webview';

import {detailScreenStyles} from './DetailScreen.style';
import useScreeningMutation from '@/hooks/mutaions/useScreeningMutation';

type DetailScreenProps = {
  route: ScreenRouteProp<stackScreens.DetailScreen>;
};

const DetailScreen = ({route}: DetailScreenProps) => {
  const {id} = route.params;

  const {isVisited} = useWebviewStore();
  const {uploadScreeningBookmark} = useScreeningMutation();

  const [currentTab, setCurrentTab] = useState<number>(0);
  const [completeHeart, setCompleteHeart] = useState<boolean>(true);
  // 임의로 uri 넣어줌
  const uri = 'https://www.naver.com';

  const {
    buttonType,
    setDetailButtonType,
    handleButtonOnPress,
    popupCancel,
    onClosePopupCancel,
    onClosePopupScreening,
    handleOptionOnPress,
  } = useScreeningType(id, uri);

  const {data, status} = useQuery({
    queryKey: ['screeningDetail'],
    queryFn: () => getScreeningDetailContent(id),
  });

  useEffect(() => {
    if (status === 'success') {
      console.log('찜하기 여부', data?.data.bookmarked);
      console.log('리뷰 여부', data?.data.reviewed);
      setDetailButtonType(
        data?.data.reviewed,
        data?.data.bookmarked,
        data?.data.screeningEndDate,
      );
    }
  }, [data]);

  // 관람 신청 모달 네 클릭 시
  const handleScreeningPopupPress = () => {
    onClosePopupScreening();
    // 찜하기 api 실행
    uploadScreeningBookmark.mutate(id);
  };

  // 관람 취소 모달 네 클릭 시
  const handleCacelPopupPress = () => {};

  return (
    <View style={detailScreenStyles.wrapper}>
      {/*관람 신청 팝업 모달*/}
      <Popup
        title="관람 예정이신가요?"
        content={`관람 예정 설정된 작품(찜)만\n관람 후 리뷰를 작성할 수 있어요.`}
        isVisible={buttonType === 'default' && isVisited}
        onClose={onClosePopupScreening}
        onPress={handleScreeningPopupPress}
      />

      {/*관람 신청 팝업 모달*/}
      <Popup
        title="관람 예정을 취소할까요?"
        content={`관람 예정 설정된 작품(찜)만\n관람 후 리뷰를 작성할 수 있어요.`}
        isVisible={popupCancel}
        onClose={onClosePopupCancel}
        onPress={handleCacelPopupPress}
      />

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
          onPress={handleButtonOnPress}
          onOptionPress={handleOptionOnPress}
          heartState={completeHeart}
        />
      </View>
    </View>
  );
};
export default DetailScreen;
