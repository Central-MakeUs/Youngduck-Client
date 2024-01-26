import SelectButton from '@/components/buttons/selectButton';
import BackTitleTopBar from '@/components/topBar/backTitleTopBar';
import stackScreens from '@/constants/stackScreens';
import useNavigator from '@/hooks/useNavigator';
import {ScreenRouteProp} from '@/types/navigator';
import {useState} from 'react';
import {FlatList, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import manageScreeningScreenStyles from './ManageScreeningScreen.style';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import MyManagementItem from '@/components/items/myManagementItem';
import {jjimScreenings, watchedScreenings} from './dummy';

interface ICommonScreeningProps {
  mode: 'review' | 'jjim';
  imageURI: string;
  title: string;
  id: number;
  dateRange: string;
}

interface IWatchedScreeningProps extends ICommonScreeningProps {
  isReviewRequired: boolean;
}

interface IJjimScreeningProps extends ICommonScreeningProps {
  isJjimActivated: boolean;
}

interface IManageScreeningProp {
  route: ScreenRouteProp<stackScreens.ManageScreeningScreen>;
}

const ManageScreeningScreen = ({route: {params}}: IManageScreeningProp) => {
  const {stackNavigation} = useNavigator();
  const [isWatcedScreening, setIsWatcedScreening] = useState<boolean>(
    params.isWatcedScreening,
  );

  const {bottom} = useSafeAreaInsets();
  const style = manageScreeningScreenStyles({bottom});
  const renderWatchedItem = ({
    item,
  }: Record<'item', IWatchedScreeningProps>) => (
    <MyManagementItem
      mode={item.mode}
      imageURI={item.imageURI}
      title={item.title}
      id={item.id}
      isReviewRequired={item.isReviewRequired}
      dateRange={item.dateRange}
    />
  );
  const renderJjimItem = ({item}: Record<'item', IJjimScreeningProps>) => (
    <MyManagementItem
      mode={item.mode}
      imageURI={item.imageURI}
      title={item.title}
      id={item.id}
      isJjimActivated={item.isJjimActivated}
      dateRange={item.dateRange}
    />
  );
  return (
    <>
      <BackTitleTopBar
        text="스크리닝 관리"
        goBack={stackNavigation.goBack}
        opacity={0}
      />
      <View style={style.menuWrap}>
        <SelectButton
          type="관람한 스크리닝"
          onPress={() => setIsWatcedScreening(true)}
          isSelected={isWatcedScreening}
        />
        <SelectButton
          type="관심 스크리닝"
          onPress={() => setIsWatcedScreening(false)}
          isSelected={!isWatcedScreening}
        />
      </View>
      <View style={style.paddingWrap}>
        <Typography
          style="Label3"
          color={palette.Text.Alternative}
          mt={8}
          mb={8}>
          총 3건
        </Typography>
      </View>
      {isWatcedScreening ? (
        <FlatList
          data={watchedScreenings as ArrayLike<IWatchedScreeningProps>}
          renderItem={renderWatchedItem}
          style={style.screeningListContainer}
        />
      ) : (
        <FlatList
          data={jjimScreenings as ArrayLike<IJjimScreeningProps>}
          renderItem={renderJjimItem}
          style={style.screeningListContainer}
        />
      )}
    </>
  );
};

export default ManageScreeningScreen;
