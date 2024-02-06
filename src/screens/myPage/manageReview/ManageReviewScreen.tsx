import SelectButton from '@/components/buttons/selectButton';
import MyManagementItem from '@/components/items/myManagementItem';
import BackTitleTopBar from '@/components/topBar/backTitleTopBar';
import Typography from '@/components/typography';
import stackScreens from '@/constants/stackScreens';
import useNavigator from '@/hooks/useNavigator';
import {ScreenRouteProp} from '@/types/navigator';
import {useState} from 'react';
import {FlatList, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import manageReviewScreenStyles from './ManageReviewScreen.style';
import palette from '@/styles/theme/color';
import {useQueries} from '@tanstack/react-query';
import {getMyScreeningReviewData, getMyPopcornReviewData} from '@/apis/myPage';
import {
  IPopcornReviewProps,
  IScreeningReviewProps,
} from '@/models/myPage/response';
import {getKorDateRange, getWeekOfMonthString} from '@/utils/getDate';
import {getReviewChips} from '@/utils/getReviewChips';
import EmptyItem from '@/components/items/emptyItem';

interface IManageReviewScreenProp {
  route: ScreenRouteProp<stackScreens.ManageReviewScreen>;
}

const ManageReviewScreen = ({route: {params}}: IManageReviewScreenProp) => {
  const {stackNavigation} = useNavigator();
  const [isScreeningReview, setIsScreeningReview] = useState<boolean>(
    params.isScreeningReview,
  );
  const [myScreeningReviewData, myPopcornReviewData] = useQueries({
    queries: [
      {queryKey: ['myScreeningReviewData'], queryFn: getMyScreeningReviewData},
      {queryKey: ['myPopcornReviewData'], queryFn: getMyPopcornReviewData},
    ],
  });
  const dataCount = isScreeningReview
    ? myScreeningReviewData?.data?.data.length
    : myPopcornReviewData?.data?.data.length;

  const dataCountString = `총 ${dataCount}건`;

  const {bottom} = useSafeAreaInsets();

  const renderScreeningReviewItem = ({
    item,
  }: Record<'item', IScreeningReviewProps>) => (
    <MyManagementItem
      mode="screening-review"
      posterImgUrl={item.posterImgUrl}
      hostName={item.hostName}
      title={item.screeningTitle}
      id={item.screeningId}
      dateRange={getKorDateRange(item.startDate, item.endDate)}
      chips={[
        {
          text: item.afterScreening
            ? '기대보다 좋았어요'
            : '기대보다 아쉬웠어요',
          isPositive: item.afterScreening,
        },
      ]}
      review={item.review}
    />
  );
  const renderPopcornReviewItem = ({
    item,
  }: Record<'item', IPopcornReviewProps>) => (
    <MyManagementItem
      mode="popcorn-review"
      posterImgUrl={item.popcorn.imageUrl}
      title={item.popcorn.movieTitle}
      id={item.popcorn.id}
      director={item.popcorn.directorName}
      popcornOfWeek={getWeekOfMonthString(item.popcorn.updatedAt)}
      chips={getReviewChips(item)}
      review={item.review}
    />
  );
  return (
    <>
      <BackTitleTopBar
        text="리뷰 관리"
        goBack={stackNavigation.goBack}
        opacity={0}
      />
      <View style={manageReviewScreenStyles.menuWrap}>
        <SelectButton
          type="스크리닝 리뷰"
          onPress={() => setIsScreeningReview(true)}
          isSelected={isScreeningReview}
        />
        <SelectButton
          type="팝콘작 리뷰"
          onPress={() => setIsScreeningReview(false)}
          isSelected={!isScreeningReview}
        />
      </View>
      <View style={manageReviewScreenStyles.paddingWrap}>
        <Typography
          style="Label3"
          color={palette.Text.Alternative}
          mt={8}
          mb={8}>
          {dataCountString}
        </Typography>
      </View>
      {isScreeningReview ? (
        <>
          {myScreeningReviewData.data?.data.length === 0 && (
            <EmptyItem text="아직 스크리닝 리뷰를 안 했어요" size="large" />
          )}
          {myScreeningReviewData.data?.data.length! > 0 && (
            <FlatList
              data={myScreeningReviewData.data?.data}
              renderItem={renderScreeningReviewItem}
              style={manageReviewScreenStyles.screeningListContainer}
            />
          )}
        </>
      ) : (
        <>
          {myPopcornReviewData.data?.data.length === 0 && (
            <EmptyItem text="아직 팝콘작 리뷰를 안 했어요" size="large" />
          )}
          {myPopcornReviewData.data?.data.length! > 0 && (
            <FlatList
              data={myPopcornReviewData.data?.data}
              renderItem={renderPopcornReviewItem}
              style={manageReviewScreenStyles.screeningListContainer}
              contentContainerStyle={{paddingBottom: bottom + 8}}
            />
          )}
        </>
      )}
    </>
  );
};

export default ManageReviewScreen;
