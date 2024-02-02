import {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
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
import ScreeningTitle from '@/components/title/screeningTitle';
import Tooltip from '@/components/tooltip';
import DefaultScrollContainer from '@/components/container/defaultScrollContainer';

import {detailScreenStyles} from './DetailScreen.style';

type DetailScreenProps = {
  route: ScreenRouteProp<stackScreens.DetailScreen>;
};

const DetailScreen = ({route}: DetailScreenProps) => {
  const {id} = route.params;
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [tooltipeShow, setTooltipShow] = useState<boolean>(false);
  const [popup, setPopup] = useState<boolean>(false);

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
        data?.data.screeningStartDate,
      );
      if (buttonType === 'default') {
        setWebview({uri: data.data.formUrl, isVisited: false});
      }
    }
  }, [data, setWebview, status, buttonType]);

  // 웹뷰 갔다와 관람 신청 모달 활성화
  const state = useIsFocused();
  useEffect(() => {
    if (webview.isVisited && state && buttonType === 'default') {
      setPopup(true);
    }
  }, [state]);

  // 관람 신청 모달 네 클릭 시
  const handleScreeningPopupPress = () => {
    // 찜하기 api 실행
    uploadScreeningBookmark.mutate(id);
    onClosePopupScreening();
    setPopup(false);
    setTooltipShow(true);
  };

  // 관람 취소 모달 네 클릭 시
  const handleCacelPopupPress = () => {
    // 찜하기 api 실행
    uploadScreeningBookmark.mutate(id);
    onClosePopupCancel();
    setPopup(false);
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <View>
        {/*관람 신청 팝업 모달*/}
        <DefaultScrollContainer>
          <Popup
            title="관람 예정이신가요?"
            content={`관람 예정 설정된 작품(찜)만\n관람 후 리뷰를 작성할 수 있어요.`}
            isVisible={popup}
            onClose={() => {
              setPopup(false);
            }}
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

          {data && (
            <>
              <ImageContentScrollContainer
                posterImage={data?.data.posterImgUrl}
                title={data?.data.screeningTitle}>
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
              </ImageContentScrollContainer>

              {currentTab === 0 && <DetailInfoPage item={data?.data} />}
              {currentTab === 1 && <DetailReviewPage id={id} />}
            </>
          )}
        </DefaultScrollContainer>
      </View>

      {currentTab === 0 && tooltipeShow && (
        <View style={detailScreenStyles.tooltip}>
          <Tooltip text="상영회 하루 전에 알람으로 알려드려요" hide={true} />
        </View>
      )}

      <BottomDetailButton
        type={buttonType}
        onPress={handleButtonOnPress}
        onOptionPress={handleOptionOnPress}
      />
    </>
  );
};
export default DetailScreen;
