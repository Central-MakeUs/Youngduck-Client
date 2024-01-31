import {ActivityIndicator} from 'react-native';
import {useEffect, useState} from 'react';
import DefaultContainer from '@/components/container/defaultContainer';
import Divider from '@/components/divider';
import BoxButton from '@/components/buttons/boxButton';
import TabBar from '@/components/tabBar';
import PopcornKeyword from '../../../components/popcornKeyword';
import VoteNextPopcorn from '../home/components/voteNextPopcorn';
import stackScreens from '@/constants/stackScreens';
import CommentItem from '@/components/items/commentItem';
import ImageContentScrollContainer from '@/components/container/imageContentScrollContainer';
import ScreeningRate from '@/components/rates/screeningRate';
import PopcornRate from '@/components/rates/popcornRate';
import useVoteMovieMutation from '@/hooks/mutaions/useRecommendMovie';
import {ScreenRouteProp} from '@/types/navigator';
import {useQueries, useQueryClient} from '@tanstack/react-query';
import {
  getPopconrKeywordData,
  getPopconrRateData,
  getPopconrReviewData,
  getPopcornPartyDetailData,
} from '@/apis/popcornParty/detail/detail';
import {getPopcornRecommendData} from '@/apis/popcornParty';
import {useIsFocused} from '@react-navigation/native';
import {format} from 'date-fns';
import Popup from '@/components/popup';
import usePopcornPartyMutation from '@/hooks/mutaions/usePopcornPartyMutation';
import DetailPopcorn from './components/detailMovie/DetailPopcorn';
import DetailBottomButtons from './components/detailBottomButtons/DetailBottomButtons';
import {getWeekOfMonthString} from '@/utils/getWeekOfMonth';

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
  const currentFocusState = useIsFocused();
  const queryClient = useQueryClient();
  const {voteMovieMutate} = useVoteMovieMutation();
  const {complainUserMutate} = usePopcornPartyMutation();
  const [
    popcornPartyDetailData,
    popcornRateData,
    popcornKeywordData,
    popcornReviewData,
    randomPopcornRecommendData,
  ] = useQueries({
    queries: [
      {
        queryKey: ['popcornPartyDetail'],
        queryFn: () => getPopcornPartyDetailData(params.id),
      },
      {
        queryKey: ['popcornRateData'],
        queryFn: () => getPopconrRateData(params.id),
      },
      {
        queryKey: ['popcornKeywordData'],
        queryFn: () => getPopconrKeywordData(params.id),
      },
      {
        queryKey: ['popcornReviewData'],
        queryFn: () => getPopconrReviewData(params.id),
      },
      {
        queryKey: ['randomPopcornRecommendData'],
        queryFn: getPopcornRecommendData,
      },
    ],
  });
  const movieData = popcornPartyDetailData.data?.data;
  const popcornRate = popcornRateData.data?.data;
  const popcornKeyword = popcornKeywordData.data?.data;
  // 더보기 활성화 시 원래 데이터 모두 보여주기
  const popcornReviews = viewMoreComment
    ? popcornReviewData.data?.data
    : popcornReviewData.data?.data.slice(0, 5);

  // tab bar에 필요한 제목들 선언
  const tabBars = [
    {title: '팝콘 지수', tabNumber: 0},
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
  return (
    <ImageContentScrollContainer
      title={getWeekOfMonthString()!}
      posterImage={movieData?.imageUrl!}>
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
            participatedCount={popcornKeyword?.participatedCount!}
            participatedUserCount={popcornKeyword?.participatedUserCount!}
            topThreeKeywords={popcornKeyword?.topThreeKeywords!}
          />
          <Divider height={8} mt={32} mb={16} />
        </DefaultContainer>
      )}
      {currentTabBarNumber === 1 && (
        <DefaultContainer>
          {popcornReviews === undefined ? (
            <ActivityIndicator />
          ) : (
            <>
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
              {!viewMoreComment && popcornReviews.length > 5 && (
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
      <VoteNextPopcorn
        popcornRecommendData={randomPopcornRecommendData.data?.data!}
        title="팝콘 튀기고 싶은 다른 영화가 있다면?"
        isLoading={false}
        voteMovieMutate={voteMovieMutate}
      />
      <DetailBottomButtons
        id={movieData?.popcornId!}
        poster={movieData?.imageUrl!}
        title={movieData?.movieTitle!}
        directorname={movieData?.directorName!}
      />
    </ImageContentScrollContainer>
  );
}

export default PopcornPartyDetailScreen;
