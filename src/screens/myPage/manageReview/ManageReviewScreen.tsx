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
import {popcornReviews, screeningReviews} from './dummy';
interface ICommonReviewProps {
  mode: 'screening-review' | 'popcorn-review';
  imageURI: string;
  title: string;
  chips: string[];
  id: number;
  review: string;
}

interface IScreeningReviewProps extends ICommonReviewProps {
  dateRange: string;
}

interface IPopcornReviewProps extends ICommonReviewProps {
  director: string;
  popcornOfWeek: string;
}

interface IManageReviewScreenProp {
  route: ScreenRouteProp<stackScreens.ManageReviewScreen>;
}

const ManageReviewScreen = ({route: {params}}: IManageReviewScreenProp) => {
  const {stackNavigation} = useNavigator();
  const [isScreeningReview, setIsScreeningReview] = useState<boolean>(
    params.isScreeningReview,
  );

  const {bottom} = useSafeAreaInsets();
  const style = manageReviewScreenStyles({bottom});
  const renderScreeningReviewItem = ({
    item,
  }: Record<'item', IScreeningReviewProps>) => (
    <MyManagementItem
      mode={item.mode}
      imageURI={item.imageURI}
      title={item.title}
      id={item.id}
      dateRange={item.dateRange}
      chips={item.chips}
      review={item.review}
    />
  );
  const renderPopcornReviewItem = ({
    item,
  }: Record<'item', IPopcornReviewProps>) => (
    <MyManagementItem
      mode={item.mode}
      imageURI={item.imageURI}
      title={item.title}
      id={item.id}
      director={item.director}
      popcornOfWeek={item.popcornOfWeek}
      chips={item.chips}
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
          총 3건
        </Typography>
      </View>
      {isScreeningReview ? (
        <FlatList
          data={screeningReviews as ArrayLike<IScreeningReviewProps>}
          renderItem={renderScreeningReviewItem}
          style={style.screeningListContainer}
        />
      ) : (
        <FlatList
          data={popcornReviews as ArrayLike<IPopcornReviewProps>}
          renderItem={renderPopcornReviewItem}
          style={style.screeningListContainer}
        />
      )}
    </>
  );
};

export default ManageReviewScreen;
