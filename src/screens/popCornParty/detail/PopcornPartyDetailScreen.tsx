import {useEffect, useState} from 'react';
import DefaultContainer from '@/components/container/defaultContainer';
import Divider from '@/components/divider';
import BoxButton from '@/components/buttons/boxButton';
import TabBar from '@/components/tabBar';
import VoteNextPopcorn from '../home/components/voteNextPopcorn';
import stackScreens from '@/constants/stackScreens';
import CommentItem from '@/components/items/commentItem';
import ImageContentScrollContainer from '@/components/container/imageContentScrollContainer';
import ScreeningRate from '@/components/rates/screeningRate';
import PopcornRate from '@/components/rates/popcornRate';
import {ScreenRouteProp} from '@/types/navigator';
import {useQueries, useQueryClient} from '@tanstack/react-query';
import {
  getPopconrRateData,
  getPopconrReviewData,
  getPopcornPartyDetailData,
  getTopThreeKeywordData,
} from '@/apis/popcornParty/detail/detail';
import {getPopcornRecommendData} from '@/apis/popcornParty';
import {useIsFocused} from '@react-navigation/native';
import {format} from 'date-fns';
import Popup from '@/components/popup';
import usePopcornPartyMutation from '@/hooks/mutaions/usePopcornPartyMutation';
import DetailPopcorn from './components/detailMovie/DetailPopcorn';
import {getWeekOfMonthString} from '@/utils/getDate';
import EmptyItem from '@/components/items/emptyItem';
import LoadingPage from '@/components/pages/loadingPage';
import Loading from '@/components/loading';
import {getScreenSize} from '@/utils/getScreenSize';
import {View} from 'react-native';
import useNavigator from '@/hooks/useNavigator';
import popcornPartyDetailScreenStyles from './popcornPartyDetailScreen.style';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import PopcornKeyword from '@/components/popcornKeyword';
import BottomBoxButton from '@/components/bottomButton/bottomBoxButton';

interface IPopcornPartyDetailScreenProp {
  route: ScreenRouteProp<stackScreens.PopcornPartyDetailScreen>;
}

function PopcornPartyDetailScreen({
  route: {params},
}: IPopcornPartyDetailScreenProp) {
  const [currentTabBarNumber, setCurrentTabBarNumber] = useState<number>(0);
  const [complainId, setComplainId] = useState<number>(0);
  const [isMoreDetailMode, setIsMoreDetailMode] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [viewMoreComment, setViewMoreComment] = useState<boolean>(false);
  const [complainPopup, setComplainPopup] = useState<boolean>(false);
  const {screenWidth} = getScreenSize();
  const imageSize = {width: screenWidth, height: screenWidth * 1.48};
  const currentFocusState = useIsFocused();
  const queryClient = useQueryClient();
  const {complainUserMutate, voteMovieMutate} = usePopcornPartyMutation();
  const {stackNavigation} = useNavigator();
  const [
    popcornPartyDetailData,
    popcornRateData,
    popcornReviewData,
    topThreeKeywordData,
    randomPopcornRecommendData,
  ] = useQueries({
    queries: [
      {
        queryKey: ['popcornPartyDetailData'],
        queryFn: () => getPopcornPartyDetailData(params.id),
      },
      {
        queryKey: ['popcornRateData'],
        queryFn: () => getPopconrRateData(params.id),
      },
      {
        queryKey: ['popcornReviewData'],
        queryFn: () => getPopconrReviewData(params.id),
      },
      {
        queryKey: ['topThreeKeywordData'],
        queryFn: () => getTopThreeKeywordData(params.id),
      },
      {
        queryKey: ['randomPopcornRecommendData'],
        queryFn: getPopcornRecommendData,
      },
    ],
  });
  const movieData = popcornPartyDetailData.data?.data;
  const popcornRate = popcornRateData.data?.data;
  // 더보기 활성화 시 원래 데이터 모두 보여주기
  const popcornReviews = viewMoreComment
    ? popcornReviewData.data?.data
    : popcornReviewData.data?.data.slice(0, 5);

  // tab bar에 필요한 제목들 선언
  const tabBars = [
    {title: '팝콘지수', tabNumber: 0},
    {title: '팝콘들의 리뷰', tabNumber: 1},
  ];

  useEffect(() => {
    if (currentFocusState && randomPopcornRecommendData.status === 'success') {
      queryClient.removeQueries({queryKey: ['randomPopcornRecommendData']});
      randomPopcornRecommendData.refetch();
    }
  }, [currentFocusState]);

  const toggleNumberOfLinesState = () => setIsMoreDetailMode(!isMoreDetailMode);

  const handleComplainReview = () => {
    setComplainPopup(false);
    complainUserMutate(complainId);
  };

  if (
    popcornPartyDetailData.isLoading ||
    popcornRateData.isLoading ||
    popcornReviewData.isLoading ||
    topThreeKeywordData.isLoading
  )
    return <LoadingPage />;

  return (
    <>
      <ImageContentScrollContainer
        title={getWeekOfMonthString(null)!}
        posterImage={movieData?.imageUrl!}
        imageSize={imageSize}
        queryKey={
          currentTabBarNumber === 0
            ? [
                'popcornPartyDetailData',
                'popcornRateData',
                'randomPopcornRecommendData',
              ]
            : ['popcornReviewData', 'randomPopcornRecommendData']
        }>
        <Popup
          title="정말 신고하시겠어요?"
          content={`신고가 누적되면\n해당 유저의 서비스 이용이 제한돼요. `}
          isVisible={complainPopup}
          onClose={() => setComplainPopup(false)}
          onPress={handleComplainReview}
          type="error"
        />
        <DetailPopcorn
          movieTitle={movieData?.movieTitle!}
          directorName={movieData?.directorName!}
          isMoreDetailMode={isMoreDetailMode}
          detail={movieData?.detail!}
          toggleNumberOfLinesState={toggleNumberOfLinesState}
        />
        <TabBar
          currentTabBarNumber={currentTabBarNumber}
          setCurrentTabBarNumber={setCurrentTabBarNumber}
          tabBars={tabBars}
        />
        {/* 현재 tab bar에 맞는 컴포넌트 보여주기 */}
        {currentTabBarNumber === 0 && (
          <DefaultContainer>
            <ScreeningRate
              mode="popcornRate"
              score={popcornRate === undefined ? 0 : Number(popcornRate)}>
              <PopcornRate isOpen={isOpen} setIsOpen={setIsOpen} />
            </ScreeningRate>
            <PopcornKeyword
              participatedCount={
                topThreeKeywordData.data?.data.participatedCount!
              }
              topThreeKeywords={
                topThreeKeywordData.data?.data.topThreeKeywords!
              }
            />
          </DefaultContainer>
        )}
        {currentTabBarNumber === 1 && (
          <DefaultContainer>
            {popcornReviewData.isLoading ? (
              <Loading />
            ) : popcornReviews?.length === 0 || !popcornReviewData.isSuccess ? (
              <EmptyItem text="아직 리뷰가 없어요" />
            ) : (
              <>
                <View style={popcornPartyDetailScreenStyles.reviewTitle}>
                  <Typography style="Subtitle2" color={palette.Another.Black}>
                    관객 리뷰
                  </Typography>
                  <Typography
                    style="Label1"
                    color={palette.Primary.Deep}
                    ml={8}>
                    {popcornReviewData.data?.data.length.toString()}
                  </Typography>
                </View>
                {popcornReviews?.map((popcornReview, idx) => (
                  <CommentItem
                    totalComments={popcornReviews.length}
                    userId={popcornReview.userId}
                    nickName={popcornReview.nickName}
                    profileImgNum={(popcornReview.profileImgNum % 3) + 1}
                    afterScreening={popcornReview.afterScreening}
                    review={popcornReview.review}
                    createdAt={format(popcornReview.createdAt, 'yyyy.MM.dd')}
                    idx={idx}
                    complainOnPress={() => {
                      setComplainId(popcornReview.userId);
                      setComplainPopup(true);
                    }}
                    key={popcornReview.createdAt}
                  />
                ))}
                {popcornReviewData?.data.data.length! > 5 &&
                  !viewMoreComment && (
                    <BoxButton
                      onPress={() => setViewMoreComment(true)}
                      mb={16}
                      variant="default">
                      더보기
                    </BoxButton>
                  )}
              </>
            )}
          </DefaultContainer>
        )}
        <Divider height={8} mt={8} mb={16} />
        <VoteNextPopcorn
          popcornRecommendData={randomPopcornRecommendData.data?.data!}
          title="팝콘 튀기고 싶은 다른 영화가 있다면?"
          isLoading={randomPopcornRecommendData.isLoading}
          voteMovieMutate={voteMovieMutate}
        />
        <View style={popcornPartyDetailScreenStyles.button}>
          <BoxButton
            onPress={() =>
              stackNavigation.navigate(stackScreens.WriteRecommandScreen)
            }
            variant="secondary">
            다른 작품 추천하기
          </BoxButton>
        </View>
      </ImageContentScrollContainer>

      <BottomBoxButton
        onPress={() =>
          stackNavigation.navigate(stackScreens.WriteReviewScreen, {
            id: movieData?.popcornId!,
            poster: movieData?.imageUrl!,
            title: movieData?.movieTitle!,
            directorname: movieData?.directorName!,
          })
        }>
        나도 리뷰쓰기
      </BottomBoxButton>
    </>
  );
}

export default PopcornPartyDetailScreen;
