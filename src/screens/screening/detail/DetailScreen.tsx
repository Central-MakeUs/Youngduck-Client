import {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
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
import useScreeningMutation from '@/hooks/mutaions/useScreeningMutation';
import LoadingPage from '@/components/pages/loadingPage';
import ScreeningTitle from '@/components/title/screeningTitle';
import Tooltip from '@/components/tooltip';
import {getScreenSize} from '@/utils/getScreenSize';
import useNavigator from '@/hooks/useNavigator';
import {openInappBrowser} from '@/services/inappBrowser';

import {detailScreenStyles} from './DetailScreen.style';

type DetailScreenProps = {
  route: ScreenRouteProp<stackScreens.DetailScreen>;
};

const DetailScreen = ({route}: DetailScreenProps) => {
  const {id} = route.params;
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [tooltipeShow, setTooltipShow] = useState<boolean>(false);
  const [imageSize, setImageSize] = useState({width: 0, height: 0});
  const {screenWidth} = getScreenSize();
  const {stackNavigation} = useNavigator();

  const {uploadScreeningBookmark} = useScreeningMutation();

  const {data, status, isLoading} = useQuery({
    queryKey: ['screeningDetail', id],
    queryFn: () => getScreeningDetailContent(id),
  });

  const {
    buttonType,
    setDetailButtonType,
    popupCancel,
    onClosePopupCancel,
    onClosePopupScreening,
    handleOptionOnPress,
    popupScreening,
    setPopupScreening,
  } = useScreeningType();

  useEffect(() => {
    if (status === 'success') {
      setDetailButtonType(
        data?.data.reviewed,
        data?.data.bookmarked,
        data?.data.screeningEndDate,
        data?.data.screeningStartDate,
      );
    }
  }, [data, status, buttonType]);

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

  const handleButtonOnPress = () => {
    if (buttonType === 'reviewStart') {
      // 리뷰 작성하기로 이동
      stackNavigation.navigate(stackScreens.ReviewWritingScreen, {id});
    }
    if (buttonType === 'default' && data) {
      // 관람 신청 웹뷰 열기
      openInappBrowser(data.data.formUrl);
      setPopupScreening(true);
    }
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
        {data && (
          <ImageContentScrollContainer
            posterImage={data?.data.posterImgUrl}
            title={data?.data.screeningTitle}
            imageSize={imageSize}
            queryKey={
              currentTab === 0
                ? ['screeningDetail']
                : ['screeningReview', 'screeningRate']
            }>
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

            {currentTab === 0 && <DetailInfoPage item={data?.data} />}
            {currentTab === 1 && <DetailReviewPage id={id} />}
          </ImageContentScrollContainer>
        )}
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
