import {Pressable, View} from 'react-native';
import popcornPartyDetailScreenStyles from './popcornPartyDetailScreen.style';
import useNavigator from '@/hooks/useNavigator';
import {useState} from 'react';
import DefaultContainer from '@/components/container/defaultContainer';
import Typography from '@/components/typography';
import Divider from '@/components/divider';
import BoxButton from '@/components/buttons/boxButton';
import TabBar from '@/components/tabBar';
import PopcornKeyword from './popcornKeyword';
import VoteNextPopcorn from '../home/components/voteNextPopcorn';
import palette from '@/styles/theme/color';
import stackScreens from '@/constants/stackScreens';
import CommentItem from '@/components/items/commentItem';
import ImageContentScrollContainer from '@/components/container/imageContentScrollContainer';
import ScreeningRate from '@/components/rates/screeningRate';
import PopcornRate from '@/components/rates/popcornRate';
import useVoteMovieMutation from '@/hooks/mutaions/useRecommendMovie';

function PopcornPartyDetailScreen() {
  const {stackNavigation} = useNavigator();
  const {voteMovieMutate} = useVoteMovieMutation();

  const [currentTabBarNumber, setCurrentTabBarNumber] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // tab bar에 필요한 제목들 선언
  const tabBars = [
    {title: '팝콘 지수', tabNumber: 0},
    {title: '팝콘들의 리뷰', tabNumber: 1},
  ];

  const comments = [
    {
      nickname: '팝코니',
      isSatisfied: true,
      review: '내가 쓴 리뷰는 리스트 최상단에 고정될꼬얌',
      date: '2024. 01. 10',
    },
    {
      nickname: '파파콘',
      isSatisfied: false,
      review:
        '오늘은 홍익대학교 영화동아리 Dromapic의 상영회를 방문했다. 상영회를 방문했는데 뭐랄까... 되게 오묘하고 메타포가 심오해서 상영회가 끝나고 나서도 계속 생각했다.. 주인공이 만진 작은 상자의 의미는 희망이였을까..? 아니면 절망이였을까..?\n적어도 절망은 아닐거라고 생각한다. 주인공이 상자를 쥐고나서 일이 잘 풀려나갔고 결말에서도 희망적인 부분을 많이 보여줬다.',
      date: '2024. 01. 10',
    },
    {
      nickname: '파콩이',
      isSatisfied: true,
      review: '인상적인 작품과 쾌적한 상영관',
      date: '2024. 01. 10',
    },
  ];

  return (
    <ImageContentScrollContainer>
      <DefaultContainer>
        <View style={popcornPartyDetailScreenStyles.introduceWrap}>
          <Typography style="Label2">1월 첫째주 팝콘작</Typography>
          <Typography style="Title2">괴물</Typography>
          <Typography style="Body2">고레에다 히로카즈</Typography>
          <Divider height={1} mb={16} mt={16} />
          <Typography style="Body1">
            제76회 칸 국제영화제에서 각본상 수상, 한국에서는 지난 10월 제28회
            부산국제영화제를 통해 첫선을 보이며 뜨거운 반응을 얻은 작품이죠.
            괴물은 세계적인 거장 고레에다 히로카즈 감독과 일본 최고의 각본가
            사카모토 유지가 처음으로 협업한 작품이자, 아시아 최초 아카데미 수상
            음악가 고(故) 사카모토 류이치의 유작이기도 합니다. 하나의 사건을
            다양한 시선으로 담아낸 놀라운 스토리텔링과 섬세한 연출력, 우리
            사회에 던지는 묵직한 화두까지! 작품을 온전히 즐기기 위해서는 ‘최대한
            아무것도 모르고 가라’ 는 평이 많았던 이번 작품, 팝코니들은 어떻게
            보셨나요? 이 주의 팝콘작, 괴물입니다.
          </Typography>
          <BoxButton onPress={() => {}} disabled mt={16}>
            설명 더 보기
          </BoxButton>
        </View>
      </DefaultContainer>
      <TabBar
        currentTabBarNumber={currentTabBarNumber}
        setCurrentTabBarNumber={setCurrentTabBarNumber}
        tabBars={tabBars}
      />
      {/* 현재 tab bar에 맞는 컴포넌트 보여주기 */}
      {currentTabBarNumber === 0 && (
        <DefaultContainer>
          <ScreeningRate mode="popcornRate" score={90}>
            <PopcornRate isOpen={isOpen} setIsOpen={setIsOpen} />
          </ScreeningRate>
          <PopcornKeyword />
          <Divider height={8} mt={32} mb={16} />
        </DefaultContainer>
      )}
      {currentTabBarNumber === 1 && (
        <DefaultContainer>
          {comments.map((comment, idx) => (
            <CommentItem
              totalComments={comments.length}
              nickname={comment.nickname}
              isSatisfied={comment.isSatisfied}
              review={comment.review}
              date={comment.date}
              idx={idx}
              key={comment.nickname}
              complainOnPress={() => {}}
            />
          ))}
        </DefaultContainer>
      )}
      <VoteNextPopcorn
        popcornRecommendData={[]}
        title="팝콘 튀기고 싶은 다른 영화가 있다면?"
        isLoading={false}
        voteMovieMutate={voteMovieMutate}
      />
      <DefaultContainer>
        <Pressable
          onPress={() =>
            stackNavigation.navigate(stackScreens.WriteRecommandScreen)
          }
          style={popcornPartyDetailScreenStyles.recommandOtherButton}>
          <Typography style="Label1" color={palette.Primary.Dark}>
            다른 작품 추천하기
          </Typography>
        </Pressable>
        <BoxButton
          onPress={() =>
            stackNavigation.navigate(stackScreens.WriteReviewScreen)
          }
          mt={22}>
          나도 리뷰쓰기
        </BoxButton>
      </DefaultContainer>
    </ImageContentScrollContainer>
  );
}

export default PopcornPartyDetailScreen;
