import {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
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

import {detailScreenStyles} from './DetailScreen.style';
import {getScreenSize} from '@/utils/getScreenSize';

type DetailScreenProps = {
  route: ScreenRouteProp<stackScreens.DetailScreen>;
};

const DetailScreen = ({route}: DetailScreenProps) => {
  const {id} = route.params;
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [tooltipeShow, setTooltipShow] = useState<boolean>(false);
  const [imageSize, setImageSize] = useState({width: 0, height: 0});
  const {screenWidth} = getScreenSize();

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
    popupScreening,
    setPopupScreening,
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
      setPopupScreening(true);
    }
  }, [state]);

  // 관람 신청 모달 네 클릭 시
  const handleScreeningPopupPress = () => {
    // 찜하기 api 실행
    uploadScreeningBookmark.mutate(id, {
      onSuccess: () => {
        setTooltipShow(true);
      },
    });
    onClosePopupScreening();
  };

  // 관람 취소 모달 네 클릭 시
  const handleCacelPopupPress = () => {
    // 찜하기 api 실행
    uploadScreeningBookmark.mutate(id);
    onClosePopupCancel();
  };

  // 포스터의 비율을 구하고 크기를 조정하여 배경 이미지로 사용
  useEffect(() => {
    if (!isLoading)
      Image.getSize(data?.data.posterImgUrl!, (width, height) =>
        setImageSize({
          width: screenWidth,
          height: (height * screenWidth) / width,
        }),
      );
  }, [isLoading]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      {/*관람 신청 팝업 모달*/}
      <Popup
        title="관람 예정이신가요?"
        content={`관람 예정 설정된 작품(찜)만\n관람 후 리뷰를 작성할 수 있어요.`}
        isVisible={popupScreening}
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
        <ImageContentScrollContainer
          posterImage={data?.data.posterImgUrl!}
          title={data?.data.screeningTitle!}
          imageSize={imageSize}
          queryKey={
            currentTab === 0
              ? ['screeningDetail']
              : ['screeningReview', 'screeningRate']
          }>
          <ScreeningTitle
            title={data?.data.screeningTitle!}
            category={data?.data.category!}
          />

          <TabBar
            currentTabBarNumber={currentTab}
            setCurrentTabBarNumber={setCurrentTab}
            tabBars={screeningTabBars}
          />

          {currentTab === 0 && <DetailInfoPage item={data?.data!} />}
          {currentTab === 1 && <DetailReviewPage id={id} />}
        </ImageContentScrollContainer>
      </View>
      {currentTab === 0 && tooltipeShow && (
        <View style={detailScreenStyles.tooltip}>
          <Tooltip
            text="관람 예정으로 등록되었어요!"
            hide={true}
            type="secondary"
            side="right"
          />
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
