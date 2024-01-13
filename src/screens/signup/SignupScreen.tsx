import BoxButton from '@/components/buttons/boxButton';
import TextInput from '@/components/textInput';
import BackTopBar from '@/components/topBar/backTopBar';

import useNavigator from '@/hooks/useNavigator';
import {useRef, useState} from 'react';
import {Dimensions, SafeAreaView, ScrollView, View} from 'react-native';
import ProgressBar from './components/progressBar';
import SubTitleDescription from '@/components/title/subTitleDescription';
import SelectButton from '@/components/buttons/selectButton';
import {GenreTypes} from '@/types/genre';

function SignupScreen() {
  const [nickname, setNickname] = useState<string>('');
  const [currentScreen, setCurrentScreen] = useState<number>(0);
  const [selectedGenres, setSelectedGenres] = useState<GenreTypes[]>([]);
  const scrollViewRef = useRef<ScrollView>(null);
  const {width} = Dimensions.get('screen');
  const {stackNavigation} = useNavigator();

  const previousScreen = () => {
    scrollViewRef?.current?.scrollTo({x: -width, animated: true});
    setCurrentScreen(0);
  };

  const handleGenre = (genre: GenreTypes) => {
    if (!selectedGenres.includes(genre)) {
      setSelectedGenres([...selectedGenres, genre]);
    } else {
      const indexOfGenre = selectedGenres.indexOf(genre);
      const newDatas = [
        ...selectedGenres.slice(0, indexOfGenre),
        ...selectedGenres.slice(indexOfGenre + 1),
      ];
      setSelectedGenres([...newDatas]);
    }
  };

  console.log(selectedGenres);

  const genres: GenreTypes[] = [
    '멜로',
    '코미디',
    '로맨틱코미디',
    '액션',
    '서부극',
    '갱스터',
    '누와르',
    '모험',
    '미스테리',
    '스릴러',
    '공포',
    '전쟁',
    'SF',
    '탐정',
    '판타지',
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <BackTopBar
        onPress={() =>
          currentScreen ? previousScreen() : stackNavigation.goBack()
        }
      />
      <ScrollView
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}>
        <ProgressBar currentScreen={currentScreen} />
        <View style={{width, justifyContent: 'space-between', padding: 16}}>
          <View
            style={{
              height: '35%',
              justifyContent: 'space-between',
            }}>
            <SubTitleDescription
              text="닉네임을 설정해주세요"
              subTitle={`닉네임은 자신의 활동명이 될거에요\n변경하고 싶다면 설정에 변경할 수 있어요`}
            />
            <TextInput
              value={nickname}
              placeholder="닉네임을 입력해주세요"
              onChangeInput={e => setNickname(e)}
              title="닉네임"
              content="닉네임을 입력해주세요"
              maxLength={10}
            />
          </View>
          <BoxButton
            onPress={() => {
              scrollViewRef?.current?.scrollToEnd();
              setCurrentScreen(1);
            }}
            style={{}}>
            다음
          </BoxButton>
        </View>
        <View style={{width, justifyContent: 'space-between', padding: 16}}>
          <View>
            <SubTitleDescription
              text="좋아하는 영화 장르를 선택해주세요"
              subTitle={`최소 1개 이상 선택해주세요!\n선택한 영화 장르는 프로필에 반영됩니다`}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 1,
              }}>
              {genres.map((genre: GenreTypes) => (
                <SelectButton
                  onPress={() => handleGenre(genre)}
                  type={genre}
                  isSelected={selectedGenres.includes(genre)}
                  key={genre}
                />
              ))}
            </View>
          </View>
          <BoxButton
            onPress={() => {
              scrollViewRef?.current?.scrollToEnd();
              setCurrentScreen(1);
            }}
            disabled={!selectedGenres.length}>
            다음
          </BoxButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignupScreen;
