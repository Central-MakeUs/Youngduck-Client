import BackTitleTopBar from '@/components/topBar/backTitleTopBar';
import Typography from '@/components/typography';
import useNavigator from '@/hooks/useNavigator';
import palette from '@/styles/theme/color';
import {FlatList, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import myScreeningScreenStyles from './MyScreeningScreen.style';
import MyManagementItem from '@/components/items/myManagementItem';
import {useQuery} from '@tanstack/react-query';
import {getMyScreeningData} from '@/apis/myPage';
import {IMyScreeningProps} from '@/models/myPage/response';
import {getKorDateRange} from '@/utils/getDate';
import EmptyItem from '@/components/items/emptyItem';

const MyScreeningScreen = () => {
  const {stackNavigation} = useNavigator();
  const {bottom} = useSafeAreaInsets();

  const myScreeningData = useQuery({
    queryKey: ['myScreeningData'],
    queryFn: getMyScreeningData,
  });

  const dataCountString = `총 ${myScreeningData.data?.data.length}건`;

  const renderScreeningScreenItem = ({
    item,
  }: Record<'item', IMyScreeningProps>) => (
    <MyManagementItem
      mode="my-screening"
      posterImgUrl={item.posterImgUrl}
      title={item.title}
      id={item.id}
      dateRange={getKorDateRange(
        item.screeningStartDate,
        item.screeningEndDate,
      )}
      isPrivate={item.private}
    />
  );
  return (
    <>
      <BackTitleTopBar
        text="나의 스크리닝"
        goBack={stackNavigation.goBack}
        opacity={0}
      />
      <View style={myScreeningScreenStyles.paddingWrap}>
        <Typography
          style="Label3"
          color={palette.Text.Alternative}
          mt={8}
          mb={8}>
          {dataCountString}
        </Typography>
      </View>
      {myScreeningData.data?.data.length === 0 ? (
        <EmptyItem text="아직 나의 스크리닝이 없어요" size="large" />
      ) : (
        <FlatList
          data={myScreeningData.data?.data!}
          renderItem={renderScreeningScreenItem}
          style={myScreeningScreenStyles.screeningListContainer}
          contentContainerStyle={{paddingBottom: bottom + 8}}
        />
      )}
    </>
  );
};

export default MyScreeningScreen;
