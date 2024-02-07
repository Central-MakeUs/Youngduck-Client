import BoxButton from '@/components/buttons/boxButton';
import SelectButton from '@/components/buttons/selectButton';
import SubTitleDescription from '@/components/title/subTitleDescription';
import {TGenre} from '@/types/signup/genre';
import selectGenre from '@/utils/selectGenre';
import {useRef, useState} from 'react';
import {View} from 'react-native';
import inputGenreStyles from './InputGenre.style';
import {BottomDrawerMethods} from 'react-native-animated-bottom-drawer';
import AgreeBottomSheet from '../agreementBottomSheet';

interface IInputGenreProps {
  nickname: string;
  idToken: string;
}

const InputGenre = ({nickname, idToken}: IInputGenreProps) => {
  const [selectedGenres, setSelectedGenres] = useState<TGenre[]>([]);
  const bottomDrawerRef = useRef<BottomDrawerMethods>(null);

  const genres: TGenre[] = [
    '멜로',
    '코미디',
    '로맨틱코미디',
    '액션',
    '서부극',
    '갱스터',
    '누와르',
    '모험',
    '미스터리',
    '스릴러',
    '공포',
    '전쟁',
    'SF',
    '탐정',
    '판타지',
  ];
  return (
    <>
      <View>
        <SubTitleDescription
          text="좋아하는 영화 장르를 선택해주세요"
          subTitle={`최소 1개 ~ 최대 5개 선택해 주세요!\n선택한 영화 장르는 프로필에 반영됩니다`}
          mb={24}
        />
        <View style={inputGenreStyles.container}>
          {genres.map((genre: TGenre) => (
            <SelectButton
              onPress={() => {
                selectGenre({selectedGenres, setSelectedGenres, genre});
              }}
              type={genre}
              isSelected={selectedGenres.includes(genre)}
              key={genre}
            />
          ))}
        </View>
      </View>
      <BoxButton
        onPress={() => bottomDrawerRef?.current?.open()}
        disabled={!selectedGenres.length}>
        다음
      </BoxButton>
      <AgreeBottomSheet
        bottomDrawerRef={bottomDrawerRef}
        selectedGenres={selectedGenres}
        nickname={nickname}
        idToken={idToken}
      />
    </>
  );
};

export default InputGenre;
