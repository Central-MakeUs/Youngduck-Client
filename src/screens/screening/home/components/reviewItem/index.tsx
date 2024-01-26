import {Image, TouchableOpacity, View} from 'react-native';

import Typography from '@/components/typography';
import ChatIcon from '@/assets/icons/chat.svg';
import useNavigator from '@/hooks/useNavigator';
import palette from '@/styles/theme/color';
import stackScreens from '@/constants/stackScreens';

import {reviewItemStyles} from './ReviewItem.style';
import {DateParsable} from 'react-native-calendar-picker';
import {getDateRange} from '@/utils/getDate';

interface IReviewItemProps {
  id: number;
  img: string;
  category: string;
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
  const handleGoDetail = () => {
    // TODO: 상세 페이지 id param 넣어주기
    stackNavigation.navigate(stackScreens.DetailScreen, {id});
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
        <Typography style="Label2">{category}</Typography>
        <Typography style="Body1" mb={8}>
          {title}
        </Typography>
        <View style={reviewItemStyles.option}>
          <Typography style="Body2" color={palette.Text.Alternative}>
            {getDateRange(startDate, endDate)}
          </Typography>
          <View style={reviewItemStyles.flex}>
            <ChatIcon />
            <Typography style="Body2" color={palette.Text.Alternative} ml={7}>
              {chatCount.toString()}
            </Typography>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ReviewItem;
