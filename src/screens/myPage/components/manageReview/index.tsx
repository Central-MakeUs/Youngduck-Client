import SvgIcons from '@/assets/svgIcons';
import Typography from '@/components/typography';
import {Pressable, View} from 'react-native';
import manageReviewStyles from './ManageReview.style';

interface IManageReviewProps {
  postName: string;
  count: number;
  idx: number;
}

const ManageReview = ({postName, count, idx}: IManageReviewProps) => {
  return (
    <Pressable
      style={[
        manageReviewStyles.container,
        {
          borderBottomWidth: idx === 2 ? 0 : 1,
        },
      ]}>
      <Typography style="Label2">{postName}</Typography>
      <View style={manageReviewStyles.countArrowWrap}>
        <Typography style="Body2">{count.toString()}</Typography>
        <SvgIcons.RightArrowIcon width={6.86} height={12} />
      </View>
    </Pressable>
  );
};
export default ManageReview;
