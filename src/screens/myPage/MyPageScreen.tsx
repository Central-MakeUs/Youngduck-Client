import SvgIcons from '@/assets/svgIcons';
import GradientContainer from '@/components/container/gradientContainer';
import Typography from '@/components/typography';
import stackScreens from '@/constants/stackScreens';
import useNavigator from '@/hooks/useNavigator';
import palette from '@/styles/theme/color';
import {useState} from 'react';
import {View, Pressable, Image} from 'react-native';
import myPageScreenStyles from './MyPageScreen.style';
import {defaultImages} from '@/assets';
import Management from './components/management';
import Divider from '@/components/divider';

const MyPageScreen = () => {
  const [nickname, setNickname] = useState<string>('LANY');
  const managePosts = [
    {postName: '스크리닝 리뷰', count: 1},
    {postName: '팝콘작 리뷰', count: 1},
    {postName: '나의 스크리닝', count: 1},
  ];
  const {stackNavigation} = useNavigator();
  return (
    <GradientContainer
      colors={[
        'hsl(54.857142857142875, 100%, 93.13725490196079%)',
        'rgb(255,255,255)',
      ]}
      end={{x: 0, y: 0.3}}>
      <View style={myPageScreenStyles.paddingWrap}>
        <Typography style="Title1">마이페이지</Typography>
        <Pressable
          onPress={() =>
            stackNavigation.navigate(stackScreens.ChangeNicknameScreen, {
              nickname,
              setNickname,
            })
          }
          style={myPageScreenStyles.nicknameContainer}>
          <View style={myPageScreenStyles.nicknameWrap}>
            <Typography style="Label1" color={palette.Primary.Dark}>
              {nickname}
            </Typography>
            <SvgIcons.ModifyIcon />
          </View>
        </Pressable>
        <Image
          source={defaultImages.myPage1}
          style={myPageScreenStyles.image}
        />
        <View style={myPageScreenStyles.screeningWrap}>
          <Pressable style={myPageScreenStyles.buttonWrap}>
            <Typography style="Label2" color={palette.Text.Strong}>
              1
            </Typography>
            <Typography style="Chips1" color={palette.Text.Alternative}>
              관람한 스크리닝
            </Typography>
          </Pressable>
          <View style={myPageScreenStyles.divider} />
          <Pressable style={myPageScreenStyles.buttonWrap}>
            <Typography style="Label2" color={palette.Text.Strong}>
              1
            </Typography>
            <Typography style="Chips1" color={palette.Text.Alternative}>
              관심 스크리닝
            </Typography>
          </Pressable>
        </View>
        <Typography style="Subtitle2">게시물 관리</Typography>
        <View style={myPageScreenStyles.managePostsContainer}>
          {managePosts.map((managePost, idx) => (
            <Management
              postName={managePost.postName}
              count={managePost.count}
              idx={idx}
              key={managePost.postName}
            />
          ))}
        </View>
      </View>
      <Divider height={8} mt={32} mb={16} />
      <View style={myPageScreenStyles.paddingWrap}>
        <Pressable style={myPageScreenStyles.settingButton}>
          <Typography style="Label1">설정</Typography>
          <SvgIcons.RightArrowIcon />
        </Pressable>
      </View>
    </GradientContainer>
  );
};
export default MyPageScreen;
