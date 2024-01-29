import SvgIcons from '@/assets/svgIcons';
import BottomSheet from '@/components/bottomSheet';
import Typography from '@/components/typography';
import {View, Keyboard, FlatList} from 'react-native';
import {BottomDrawerMethods} from 'react-native-animated-bottom-drawer';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import searchBottomSheetStyles from './SearchBottomSheet.style';
import Input from '@/components/input';
import {useState} from 'react';
import DefaultContainer from '@/components/container/defaultContainer';
import palette from '@/styles/theme/color';
import Divider from '@/components/divider';
import MovieItem from '@/components/items/movieItem';
import BoxButton from '@/components/buttons/boxButton';
import {getScreenSize} from '@/utils/getScreenSize';
import GrayPopcornSvg from '@/assets/icons/gray-popcorn.svg';
import {useQuery} from '@tanstack/react-query';
import {getSearchMovieData} from '@/apis/popcornParty';
import {
  IRecommendMovieProps,
  ISearchMovieDataProps,
} from '@/types/popcornParty';
import getMovieList from '@/utils/getMovieList';

interface ISearchBottomSheetProp {
  bottomDrawerRef: React.RefObject<BottomDrawerMethods>;
  setValue: React.Dispatch<React.SetStateAction<IRecommendMovieProps>>;
}

const SearchBottomSheet = ({
  bottomDrawerRef,
  setValue,
}: ISearchBottomSheetProp) => {
  const {bottom} = useSafeAreaInsets();
  const [movie, setMovie] = useState<string>('');
  const [selected, setSelected] = useState<IRecommendMovieProps>({
    title: '',
    movieSeq: '',
  });
  const styles = searchBottomSheetStyles({bottom});
  const {screenHeight} = getScreenSize();

  const {data: searchMovieData, refetch} = useQuery({
    queryKey: ['searchMovie'],
    queryFn: () => getSearchMovieData(movie),
    enabled: false,
  });
  const searchResults = getMovieList(searchMovieData!);

  const renderItem = ({item}: Record<'item', ISearchMovieDataProps>) => (
    <MovieItem
      poster={item.poster}
      title={item.title}
      directorNm={item.directorNm}
      movieSeq={item.movieSeq}
      selected={selected}
      setSelected={setSelected}
    />
  );

  const inputMovie = (e: string) => setMovie(e);

  const closeModal = () => {
    setMovie('');
    bottomDrawerRef?.current?.close();
  };

  // 팝콘작 추천하기 -> 영화 검색
  const searchMovies = async () => {
    await refetch();
  };

  const setRecommandMovie = () => {
    setValue({title: selected.title, movieSeq: selected.movieSeq});
    closeModal();
  };

  return (
    <BottomSheet drawerRef={bottomDrawerRef} height={(screenHeight * 2) / 3}>
      <View style={styles.container}>
        <View style={styles.wrap}>
          <Typography style="Subtitle2">영화 찾기</Typography>
          <SvgIcons.CancelIcon onPress={closeModal} />
        </View>
        <DefaultContainer>
          <Input
            value={movie}
            title="영화"
            placeholder="영화 제목을 입력해 주세요"
            onChangeInput={inputMovie}
            maxLength={15}
            mode="search"
            returnKeyType="done"
            onSubmitEditing={Keyboard.dismiss}
            onSearchPress={searchMovies}
          />
          <View style={styles.totalResultWrap}>
            <Typography style="Label3">영화 검색결과 총 </Typography>
            <Typography style="Label3" color={palette.Primary.Deep}>
              {`${
                searchMovieData === undefined ? 0 : searchMovieData.length
              }건`}
            </Typography>
          </View>
          <Divider height={1} mb={8} mt={8} />
          <View style={styles.responseWrap}>
            {searchMovieData === undefined || searchMovieData.length === 0 ? (
              <View style={styles.emptyResponseWrap}>
                <GrayPopcornSvg />
                <Typography
                  style="Label1"
                  color={palette.Text.Alternative}
                  mt={16}>
                  검색 결과가 나오지 않아요.
                </Typography>
              </View>
            ) : (
              <FlatList data={searchResults} renderItem={renderItem} />
            )}
            <BoxButton onPress={setRecommandMovie}>선택하기</BoxButton>
          </View>
        </DefaultContainer>
      </View>
    </BottomSheet>
  );
};

export default SearchBottomSheet;
