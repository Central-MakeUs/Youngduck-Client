import SvgIcons from '@/assets/svgIcons';
import GradientContainer from '@/components/container/gradientContainer';
import Typography from '@/components/typography';
import stackScreens from '@/constants/stackScreens';
import useNavigator from '@/hooks/useNavigator';
import palette from '@/styles/theme/color';
import {View, Pressable, Image} from 'react-native';
import myPageScreenStyles from './MyPageScreen.style';
import ManagePost from './components/managePost';
import Divider from '@/components/divider';
import MyScreening from './components/myScreening';
import {useUserStore} from '@/stores/user';
import SubMenu from '@/components/subMenu';
import DefaultScrollContainer from '@/components/container/defaultScrollContainer';
import {useQueries} from '@tanstack/react-query';
import {
  getJjimScreeningData,
  getMyScreeningData,
  getMyPopcornReviewData,
  getMyScreeningReviewData,
  getWatchedScreeningData,
} from '@/apis/myPage';
import LoadingPage from '@/components/pages/loadingPage';
import {getProfile} from '@/utils/getProfile';
import {getUserGenres} from '@/apis/user/user';
import Chip from '@/components/chip';
import {TGenre} from '@/types/signup/genre';

const MyPageScreen = () => {
  const {user} = useUserStore();
  const {stackNavigation} = useNavigator();

  const [
    watchedScreeningData,
    jjimScreeningData,
    myScreeningReviewData,
    myPopcornReviewData,
    myScreeningData,
    myPageGenre,
  ] = useQueries({
    queries: [
      {queryKey: ['watchedScreeningData'], queryFn: getWatchedScreeningData},
      {queryKey: ['jjimScreeningData'], queryFn: getJjimScreeningData},
      {queryKey: ['myScreeningReviewData'], queryFn: getMyScreeningReviewData},
      {queryKey: ['myPopcornReviewData'], queryFn: getMyPopcornReviewData},
      {queryKey: ['myScreeningData'], queryFn: getMyScreeningData},
      {queryKey: ['myGenre'], queryFn: getUserGenres},
    ],
  });

  const managePosts = [
    {postName: '스크리닝 리뷰', count: myScreeningReviewData.data?.data.length},
    {postName: '팝콘작 리뷰', count: myPopcornReviewData.data?.data.length},
    {postName: '나의 스크리닝', count: myScreeningData.data?.data.length},
  ];
  if (
    watchedScreeningData.isLoading ||
    jjimScreeningData.isLoading ||
    myScreeningReviewData.isLoading ||
    myPopcornReviewData.isLoading ||
    myScreeningData.isLoading ||
    myPageGenre.isLoading
  )
    return <LoadingPage />;
  return (
    <GradientContainer
      colors={[
        'hsl(54.857142857142875, 100%, 93.13725490196079%)',
        'rgb(255,255,255)',
      ]}
      end={{x: 0, y: 0.3}}>
      <DefaultScrollContainer>
        <View style={myPageScreenStyles.paddingWrap}>
          <Typography style="Title1">마이페이지</Typography>
          <Pressable
            onPress={() =>
              stackNavigation.navigate(stackScreens.ChangeNicknameScreen)
            }
            style={myPageScreenStyles.nicknameContainer}>
            <View style={myPageScreenStyles.nicknameWrap}>
              <Typography style="Label1" color={palette.Primary.Dark}>
                {user.nickname}
              </Typography>
              <SvgIcons.ModifyIcon />
            </View>
          </Pressable>
          <View style={myPageScreenStyles.chipContainer}>
            <View style={myPageScreenStyles.genre}>
              {myPageGenre.data?.data &&
                myPageGenre.data?.data.map((genre: TGenre) => (
                  <Chip text={genre} key={genre} state="secondary" />
                ))}
            </View>
          </View>
          <Image
            source={getProfile(user.profileNumber)}
            style={myPageScreenStyles.image}
          />
          <View style={myPageScreenStyles.screeningWrap}>
            <MyScreening
              type="관람한 스크리닝"
              count={
                watchedScreeningData.data?.data.length
                  ? watchedScreeningData.data?.data.length!
                  : 0
              }
            />
            <View style={myPageScreenStyles.divider} />
            <MyScreening
              type="관심 스크리닝"
              count={
                jjimScreeningData.data?.data.length
                  ? jjimScreeningData.data?.data.length!
                  : 0
              }
            />
          </View>
          <Typography style="Subtitle2">게시물 관리</Typography>
          <View style={myPageScreenStyles.managePostsContainer}>
            {managePosts.map((managePost, idx) => (
              <ManagePost
                postName={managePost.postName}
                count={managePost.count!}
                idx={idx}
                key={managePost.postName}
              />
            ))}
          </View>
        </View>
        <Divider height={8} mt={32} mb={16} />
        <SubMenu
          text="설정"
          onPress={() => stackNavigation.navigate(stackScreens.SettingScreen)}
          mb={16}
        />
      </DefaultScrollContainer>
    </GradientContainer>
  );
};
export default MyPageScreen;
