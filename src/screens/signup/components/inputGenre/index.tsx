import BoxButton from '@/components/buttons/boxButton';
import SelectButton from '@/components/buttons/selectButton';
import SubTitleDescription from '@/components/title/subTitleDescription';
import {GenreTypes} from '@/types/genre';
import selectGenre from '@/utils/selectGenre';
import {useState} from 'react';
import {View} from 'react-native';
import inputGenreStyles from './InputGenre.style';

const InputGenre = () => {
  const [selectedGenres, setSelectedGenres] = useState<GenreTypes[]>([]);

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
    <>
      <View>
        <SubTitleDescription
          text="좋아하는 영화 장르를 선택해주세요"
          subTitle={`최소 1개 이상 선택해주세요!\n선택한 영화 장르는 프로필에 반영됩니다`}
          mb={24}
        />
        <View style={inputGenreStyles.container}>
          {genres.map((genre: GenreTypes) => (
            <SelectButton
              onPress={() =>
                selectGenre({selectedGenres, setSelectedGenres, genre})
              }
              type={genre}
              isSelected={selectedGenres.includes(genre)}
              key={genre}
            />
          ))}
        </View>
      </View>
      <BoxButton onPress={() => {}} disabled={!selectedGenres.length}>
        다음
      </BoxButton>
    </>
  );
};

export default InputGenre;
