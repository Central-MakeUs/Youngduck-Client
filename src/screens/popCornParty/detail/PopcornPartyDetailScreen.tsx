import {
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  View,
} from 'react-native';
import popcornPartyDetailScreenStyles from './popcornPartyDetailScreen.style';
import BackTitleTopBar from '@/components/topBar/backTitleTopBar';
import useNavigator from '@/hooks/useNavigator';
import {getScreenSize} from '@/utils/getScreenSize';
import {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import DefaultContainer from '@/components/container/defaultContainer';
import Typography from '@/components/typography';
import Divider from '@/components/divider';
import BoxButton from '@/components/buttons/boxButton';
import ScreeningIndex from '@/components/screeningIndex';
import TabBar from '@/components/tabBar';
import PopcornKeyword from './popcornKeyword';

function PopcornPartyDetailScreen() {
  const {stackNavigation} = useNavigator();
  const {screenWidth} = getScreenSize();
  const {top} = useSafeAreaInsets();
  const [isLeft, setIsLeft] = useState<boolean>(true);

  const [opacity, setOpacity] = useState<number>(1);

  const handleGoBack = () => stackNavigation.goBack();

  const handleTopBarState = (pressedTab: 'left' | 'right') =>
    setIsLeft(pressedTab === 'left' ? true : false);

  const calculateOpacity = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const value =
      1 - e.nativeEvent.contentOffset.y / (screenWidth - (top + 60));
    setOpacity(value < 0 ? 0 : value);
  };

  return (
    <View style={popcornPartyDetailScreenStyles.container}>
      <BackTitleTopBar
        opacity={opacity}
        goBack={handleGoBack}
        text="1월 첫째주 팝콘작"
      />
      <ScrollView
        style={popcornPartyDetailScreenStyles.container}
        scrollEventThrottle={16}
        onScroll={calculateOpacity}
        bounces={false}>
        <View style={{opacity: opacity}}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9C_se7NWEVh0Yigz0mxRBfSpQSxkcWZmAA&usqp=CAU',
            }}
            style={popcornPartyDetailScreenStyles.image}
          />
          <LinearGradient
            colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0)']}
            style={popcornPartyDetailScreenStyles.imageBlur}
          />
        </View>
        <ScrollView style={popcornPartyDetailScreenStyles.container}>
          <DefaultContainer>
            <View style={popcornPartyDetailScreenStyles.introduceWrap}>
              <Typography style="Label2">1월 첫째주 팝콘작</Typography>
              <Typography style="Title2">괴물</Typography>
              <Typography style="Body2">고레에다 히로카즈</Typography>
              <Divider height={1} mb={16} mt={16} />
              <Typography style="Body1">
                제76회 칸 국제영화제에서 각본상 수상, 한국에서는 지난 10월
                제28회 부산국제영화제를 통해 첫선을 보이며 뜨거운 반응을 얻은
                작품이죠. 괴물은 세계적인 거장 고레에다 히로카즈 감독과 일본
                최고의 각본가 사카모토 유지가 처음으로 협업한 작품이자, 아시아
                최초 아카데미 수상 음악가 고(故) 사카모토 류이치의 유작이기도
                합니다. 하나의 사건을 다양한 시선으로 담아낸 놀라운 스토리텔링과
                섬세한 연출력, 우리 사회에 던지는 묵직한 화두까지! 작품을 온전히
                즐기기 위해서는 ‘최대한 아무것도 모르고 가라’ 는 평이 많았던
                이번 작품, 팝코니들은 어떻게 보셨나요? 이 주의 팝콘작,
                괴물입니다.
              </Typography>
              <BoxButton onPress={() => {}} disabled mt={16}>
                설명 더 보기
              </BoxButton>
            </View>
          </DefaultContainer>
          <TabBar
            leftTabBarName="팝콘 지수"
            rightTabBarName="팝콘들의 리뷰"
            isLeft={isLeft}
            handleTopBarState={handleTopBarState}
          />
          <DefaultContainer>
            <ScreeningIndex mt={24} mb={40} />
            <PopcornKeyword />
          </DefaultContainer>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

export default PopcornPartyDetailScreen;
