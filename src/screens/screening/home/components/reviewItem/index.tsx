import {Image, TouchableOpacity, View} from 'react-native';
import {DateParsable} from 'react-native-calendar-picker';

import Typography from '@/components/typography';
import HeartIcon from '@/assets/icons/heart.svg';
import useNavigator from '@/hooks/useNavigator';
import palette from '@/styles/theme/color';
import stackScreens from '@/constants/stackScreens';
import {getDateRange} from '@/utils/getDate';
import {getCategory} from '@/utils/getCategory';
import {TEngCategory} from '@/models/enums/category';
import useCheckLogin from '@/hooks/useCheckLogin';

import {reviewItemStyles} from './ReviewItem.style';

interface IReviewItemProps {
  id: number;
  img: string;
  category: TEngCategory;
  title: string;
  startDate: DateParsable;
  endDate: DateParsable;
  chatCount: number;
}
const ReviewItem = ({
  id,
  img,
  category,
  title,
  startDate,
  endDate,
  chatCount,
}: IReviewItemProps) => {
  const {stackNavigation} = useNavigator();
  const {checkLogin} = useCheckLogin();

  const handleGoDetail = () => {
    checkLogin(() => {
      stackNavigation.navigate(stackScreens.DetailScreen, {id});
    });
  };
  return (
    <TouchableOpacity
      style={reviewItemStyles.container}
      activeOpacity={0.8}
      onPress={handleGoDetail}>
      <Image
        source={{
          uri: img,
        }}
        style={reviewItemStyles.image}
      />
      <View style={reviewItemStyles.content}>
        <Typography style="Body2" color={palette.Text.Alternative}>
          {getCategory(category)}
        </Typography>
        <Typography style="Label1" color={palette.Text.Normal} mb={8}>
          {title}
        </Typography>
        <View style={reviewItemStyles.option}>
          <Typography style="Body2" color={palette.Text.Alternative}>
            {getDateRange(startDate, endDate)}
          </Typography>
          <View style={reviewItemStyles.flex}>
            <HeartIcon />
            <Typography style="Body2" color={palette.Text.Alternative} ml={4}>
              {chatCount.toString()}
            </Typography>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ReviewItem;
