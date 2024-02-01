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
import {
  IJjimScreeningProps,
  IWatchedScreeningProps,
} from '@/models/myPage/response';
import {getDashDateRange} from '@/utils/getDate';
import EmptyItem from '@/components/items/emptyItem';
import {useQueries} from '@tanstack/react-query';
import {getJjimScreeningData, getWatchedScreeningData} from '@/apis/myPage';

interface IManageScreeningProp {
  route: ScreenRouteProp<stackScreens.ManageScreeningScreen>;
}

const ManageScreeningScreen = ({route: {params}}: IManageScreeningProp) => {
  const {stackNavigation} = useNavigator();
  const [isWatcedScreening, setIsWatcedScreening] = useState<boolean>(
    params.isWatcedScreening,
  );
  const [watchedScreeningData, jjimScreeningData] = useQueries({
    queries: [
      {queryKey: ['watchedScreeningData'], queryFn: getWatchedScreeningData},
      {queryKey: ['jjimScreeningData'], queryFn: getJjimScreeningData},
    ],
  });

  const dataCount = isWatcedScreening
    ? watchedScreeningData?.data?.data.length
    : jjimScreeningData?.data?.data.length;

  const dataCountString = `총 ${dataCount}건`;

  const {bottom} = useSafeAreaInsets();
  const style = manageScreeningScreenStyles({bottom});
  const renderWatchedItem = ({
    item,
  }: Record<'item', IWatchedScreeningProps>) => (
    <MyManagementItem
      mode="watched-screening"
      posterImgUrl={item.posterImgUrl}
      title={item.title}
      dateRange={getDashDateRange(
        item.screeningStartDate,
        item.screeningEndDate,
      )}
      id={item.id}
    />
  );
  const renderJjimItem = ({item}: Record<'item', IJjimScreeningProps>) => (
    <MyManagementItem
      mode="jjim-screening"
      posterImgUrl={item.posterImgUrl}
      title={item.screeningTitle}
      dateRange={getDashDateRange(
        item.screeningStartDate,
        item.screeningEndDate,
      )}
      id={item.screeningId}
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
          {dataCountString}
        </Typography>
      </View>
      {isWatcedScreening ? (
        watchedScreeningData?.data?.data.length === 0 ? (
          <EmptyItem text="아직 관람한 스크리닝이 없어요." size="large" />
        ) : (
          <FlatList
            data={watchedScreeningData.data?.data}
            renderItem={renderWatchedItem}
            style={style.screeningListContainer}
          />
        )
      ) : jjimScreeningData?.data?.data.length === 0 ? (
        <EmptyItem text="아직 관심 스크리닝이 없어요." size="large" />
      ) : (
        <FlatList
          data={jjimScreeningData.data?.data}
          renderItem={renderJjimItem}
          style={style.screeningListContainer}
        />
      )}
    </>
  );
};

export default ManageScreeningScreen;
