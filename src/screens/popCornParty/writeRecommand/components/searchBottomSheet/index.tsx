import SvgIcons from '@/assets/svgIcons';
import BottomSheet from '@/components/bottomSheet';
import Typography from '@/components/typography';
import {View, Keyboard} from 'react-native';
import {BottomDrawerMethods} from 'react-native-animated-bottom-drawer';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import searchBottomSheetStyles from './SearchBottomSheet.style';
import Input from '@/components/input';
import {useState} from 'react';
import DefaultContainer from '@/components/container/defaultContainer';
import palette from '@/styles/theme/color';
import Divider from '@/components/divider';
import {useSearchStore} from '@/stores/search';

interface ISearchBottomSheetProp {
  bottomDrawerRef: React.RefObject<BottomDrawerMethods>;
}

const SearchBottomSheet = ({bottomDrawerRef}: ISearchBottomSheetProp) => {
  const {bottom} = useSafeAreaInsets();
  const [movie, setMovie] = useState('');
  const {searchResults} = useSearchStore();

  const inputMovie = (e: string) => setMovie(e);
  return (
    <BottomSheet drawerRef={bottomDrawerRef} height={420 + bottom}>
      <View style={searchBottomSheetStyles.container}>
        <Typography style="Subtitle2">영화 찾기</Typography>
        <SvgIcons.CancelIcon />
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
        />
        <View style={{flexDirection: 'row', marginTop: 16}}>
          <Typography style="Label3">영화 검색결과 총 </Typography>
          <Typography style="Label3" color={palette.Primary.Deep}>
            {`${searchResults.length.toString()}건`}
          </Typography>
        </View>
        <Divider height={1} mb={8} mt={8} />
        {!searchResults.length ? (
          <Typography style="Title1">일치하는 데이터가 없습니다!</Typography>
        ) : (
          <Typography style="Title1">
            {searchResults.length.toString()}
          </Typography>
        )}
      </DefaultContainer>
    </BottomSheet>
  );
};

export default SearchBottomSheet;
