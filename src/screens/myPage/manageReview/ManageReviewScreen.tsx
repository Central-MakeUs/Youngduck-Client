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
import {getPopcornReviewData, getScreeningReviewData} from '@/apis/myPage';
import {
  IPopcornReviewProps,
  IScreeningReviewProps,
} from '@/models/myPage/response';

interface IManageReviewScreenProp {
  route: ScreenRouteProp<stackScreens.ManageReviewScreen>;
}

const ManageReviewScreen = ({route: {params}}: IManageReviewScreenProp) => {
  const {stackNavigation} = useNavigator();
  const [isScreeningReview, setIsScreeningReview] = useState<boolean>(
    params.isScreeningReview,
  );
  const [screeningReviewData, popcornReviewData] = useQueries({
    queries: [
      {queryKey: ['screeningReviewData'], queryFn: getScreeningReviewData},
      {queryKey: ['popcornReviewData'], queryFn: getPopcornReviewData},
    ],
  });
  const dataCount = isScreeningReview
    ? screeningReviewData?.data?.data.length
    : popcornReviewData?.data?.data.length;

  const dataCountString = `총 ${dataCount}건`;

  const {bottom} = useSafeAreaInsets();
  const style = manageReviewScreenStyles({bottom});
  const renderScreeningReviewItem = ({
    item,
  }: Record<'item', IScreeningReviewProps>) => (
    <MyManagementItem
      mode="screening-review"
      posterImgUrl={item.posterImgUrl}
      title={item.screeningTitle}
      id={item.screeningId}
      dateRange={item.dateRange}
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
  }: Record<'item', IPopcornReviewProps>) => {
    const positiveKeys = Object.keys(item.popcornPositive);
    const positiveChips = Object.values(item.popcornPositive).map(
      (value, idx) => {
        if (value) {
          return {text: positiveKeys[idx], isPositive: true};
        }
      },
    );
    const negativeKeys = Object.keys(item.popcornNegative);
    const negativeChips = Object.values(item.popcornNegative).map(
      (value, idx) => {
        if (value) {
          return {text: negativeKeys[idx], isPositive: false};
        }
      },
    );
    const chips = [...positiveChips, ...negativeChips];
    return (
      <MyManagementItem
        mode="popcorn-review"
        posterImgUrl={item.posterImgUrl}
        title={item.title}
        id={item.popcornId}
        director={item.directorName}
        popcornOfWeek={item.popcornOfWeek}
        chips={chips}
        review={item.review}
      />
    );
  };
  return (
    <>
      <BackTitleTopBar
        text="리뷰 관리"
        goBack={stackNavigation.goBack}
        opacity={0}
      />
      <View style={style.menuWrap}>
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
      <View style={style.paddingWrap}>
        <Typography
          style="Label3"
          color={palette.Text.Alternative}
          mt={8}
          mb={8}>
          {dataCountString}
        </Typography>
      </View>
      {isScreeningReview ? (
        <FlatList
          data={screeningReviewData.data?.data}
          renderItem={renderScreeningReviewItem}
          style={style.screeningListContainer}
        />
      ) : (
        <FlatList
          data={popcornReviewData.data?.data}
          renderItem={renderPopcornReviewItem}
          style={style.screeningListContainer}
        />
      )}
    </>
  );
};

export default ManageReviewScreen;
