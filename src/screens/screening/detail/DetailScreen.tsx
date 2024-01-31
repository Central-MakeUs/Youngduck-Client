import {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useQuery} from '@tanstack/react-query';

import ImageContentScrollContainer from '@/components/container/imageContentScrollContainer';
import TabBar from '@/components/tabBar';
import DetailInfoPage from '@/components/pages/detailInfoPage';
import DetailReviewPage from '@/components/pages/detailReviewPage';
import stackScreens from '@/constants/stackScreens';
import {ScreenRouteProp} from '@/types/navigator';
import BottomDetailButton from './components/bottomDetailButton';
import {getScreeningDetailContent} from '@/apis/screening/detail';
import {screeningTabBars} from '@/constants/tabBars';
import useScreeningType from './hooks/useScreeningType';
import Popup from '@/components/popup';
import {useWebviewStore} from '@/stores/webview';
import useScreeningMutation from '@/hooks/mutaions/useScreeningMutation';
import LoadingPage from '@/components/pages/loadingPage';

import {detailScreenStyles} from './DetailScreen.style';
import ScreeningTitle from '@/components/title/screeningTitle';

type DetailScreenProps = {
  route: ScreenRouteProp<stackScreens.DetailScreen>;
};

const DetailScreen = ({route}: DetailScreenProps) => {
  const {id} = route.params;
  const [currentTab, setCurrentTab] = useState<number>(0);

  const {webview, setWebview} = useWebviewStore();

  const {uploadScreeningBookmark} = useScreeningMutation();

  const {data, status, isLoading} = useQuery({
    queryKey: ['screeningDetail', id],
    queryFn: () => getScreeningDetailContent(id),
  });

  const {
    buttonType,
    setDetailButtonType,
    handleButtonOnPress,
    popupCancel,
    onClosePopupCancel,
    onClosePopupScreening,
    handleOptionOnPress,
  } = useScreeningType(id);

  useEffect(() => {
    if (status === 'success') {
      setDetailButtonType(
        data?.data.reviewed,
        data?.data.bookmarked,
        data?.data.screeningEndDate,
      );
      if (buttonType === 'default') {
        setWebview({uri: data.data.formUrl, isVisited: false});
      }
    }
  }, [data, setWebview, status, buttonType]);

  // 관람 신청 모달 네 클릭 시
  const handleScreeningPopupPress = () => {
    // 찜하기 api 실행
    uploadScreeningBookmark.mutate(id);
    onClosePopupScreening();
  };

  // 관람 취소 모달 네 클릭 시
  const handleCacelPopupPress = () => {
    // 찜하기 api 실행
    uploadScreeningBookmark.mutate(id);
    onClosePopupCancel();
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <View style={detailScreenStyles.wrapper}>
      {/*관람 신청 팝업 모달*/}
      <Popup
        title="관람 예정이신가요?"
        content={`관람 예정 설정된 작품(찜)만\n관람 후 리뷰를 작성할 수 있어요.`}
        isVisible={buttonType === 'default' && webview.isVisited}
        onClose={onClosePopupScreening}
        onPress={handleScreeningPopupPress}
      />

      {/*관람 취소 팝업 모달*/}
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
            <ScreeningTitle
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
              <DetailInfoPage item={data?.data} />
            )}
            {currentTab === 1 && <DetailReviewPage id={id} />}
          </View>
        </ImageContentScrollContainer>
      </View>

      <View style={detailScreenStyles.bottom}>
        <BottomDetailButton
          type={buttonType}
          onPress={handleButtonOnPress}
          onOptionPress={handleOptionOnPress}
        />
      </View>
    </View>
  );
};
export default DetailScreen;
