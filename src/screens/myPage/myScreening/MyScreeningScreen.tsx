import BackTitleTopBar from '@/components/topBar/backTitleTopBar';
import Typography from '@/components/typography';
import useNavigator from '@/hooks/useNavigator';
import palette from '@/styles/theme/color';
import {FlatList, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MyScreeningScreenStyles from './MyScreeningScreen.style';
import MyManagementItem from '@/components/items/myManagementItem';
import {myScreenings} from './dummy';

interface IMyScreeningProps {
  mode: 'my-screening';
  imageURI: string;
  title: string;
  id: number;
  dateRange: string;
  isPrivate: boolean;
}

const MyScreeningScreen = () => {
  const {stackNavigation} = useNavigator();
  const {bottom} = useSafeAreaInsets();
  const style = MyScreeningScreenStyles({bottom});

  const renderScreeningScreenItem = ({
    item,
  }: Record<'item', IMyScreeningProps>) => (
    <MyManagementItem
      mode={item.mode}
      imageURI={item.imageURI}
      title={item.title}
      id={item.id}
      dateRange={item.dateRange}
      isPrivate={item.isPrivate}
    />
  );
  return (
    <>
      <BackTitleTopBar
        text="나의 스크리닝"
        goBack={stackNavigation.goBack}
        opacity={0}
      />
      <View style={style.paddingWrap}>
        <Typography
          style="Label3"
          color={palette.Text.Alternative}
          mt={8}
          mb={8}>
          총 3건
        </Typography>
      </View>
      <FlatList
        data={myScreenings as ArrayLike<IMyScreeningProps>}
        renderItem={renderScreeningScreenItem}
        style={style.screeningListContainer}
      />
    </>
  );
};

export default MyScreeningScreen;
