import {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import {useQuery} from '@tanstack/react-query';

import {ScreenRouteProp} from '@/types/navigator';
import stackScreens from '@/constants/stackScreens';
import MyDetailBottomButton from './components/myDetailBottomButton';
import ImageContentScrollContainer from '@/components/container/imageContentScrollContainer';
import ScreeningTitle from '@/components/title/screeningTitle';
import {myScreeningTabBars} from '@/constants/tabBars';
import DetailInfoPage from '@/components/pages/detailInfoPage';
import DetailReviewPage from '@/components/pages/detailReviewPage';
import DetailStatisticScreen from '@/components/pages/detailStatisticPage';
import TabBar from '@/components/tabBar';
import useNavigator from '@/hooks/useNavigator';
import {getScreeningMyDetailContent} from '@/apis/screening/detail';
import useScreeningMutation from '@/hooks/mutaions/useScreeningMutation';
import LoadingPage from '@/components/pages/loadingPage';
import {getScreenSize} from '@/utils/getScreenSize';

interface IMyDetailScreenProps {
  route: ScreenRouteProp<stackScreens.MyDetailScreen>;
}
const MyDetailScreen = ({route: {params}}: IMyDetailScreenProps) => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [imageSize, setImageSize] = useState({width: 0, height: 0});
  const {screenWidth} = getScreenSize();
  const {stackNavigation} = useNavigator();
  const {uploadScreeningPrivate} = useScreeningMutation();

  const {data, isLoading} = useQuery({
    queryKey: ['screeningMyDetail'],
    queryFn: () => getScreeningMyDetailContent(params.id),
  });

  // 작성하기 페이지 수정 타입으로 이동
  const handleGoToWrite = () => {
    if (data) {
      stackNavigation.navigate(stackScreens.WritingScreen, {
        type: 'modified',
        id: params.id,
        search: data.data.location,
      });
    }
  };
  // 나의 작성하기 비공개 및 공개 처리
  const handlePrivateOption = async () => {
    await uploadScreeningPrivate.mutateAsync(params.id);
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
  if (isLoading) return <LoadingPage />;

  return (
    <>
      <ImageContentScrollContainer
        title={data?.data.screeningTitle!}
        posterImage={data?.data.posterImgUrl!}
        imageSize={imageSize}
        queryKey={
          currentTab === 1
            ? ['screeningReview', 'screeningRate']
            : currentTab === 2
            ? ['screeningMyStatistic']
            : []
        }>
        <ScreeningTitle
          title={data?.data.screeningTitle!}
          category={data?.data.category!}
        />

        <TabBar
          currentTabBarNumber={currentTab}
          setCurrentTabBarNumber={setCurrentTab}
          tabBars={myScreeningTabBars}
        />

        <View>
          {currentTab === 0 && <DetailInfoPage item={data?.data!} />}
          {currentTab === 1 && <DetailReviewPage id={params.id} />}
          {currentTab === 2 && <DetailStatisticScreen id={params.id} />}
        </View>
      </ImageContentScrollContainer>

      {data && (
        <MyDetailBottomButton
          type={data.data.private ? 'myClose' : 'myOpen'}
          onPress={handlePrivateOption}
          optionPress={handleGoToWrite}
        />
      )}
    </>
  );
};
export default MyDetailScreen;
