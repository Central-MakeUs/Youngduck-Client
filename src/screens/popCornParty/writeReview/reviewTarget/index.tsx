import Typography from '@/components/typography';
import {Image} from 'react-native';
import {View} from 'react-native';
import reviewTargetStyles from './ReviewTarget.style';
import Divider from '@/components/divider';
import EmptyMovie from '@/assets/icons/empty-movie.svg';

interface IReviewTargetProps {
  imageURI: string;
  title: string;
  director: string;
}

const ReviewTarget = ({imageURI, title, director}: IReviewTargetProps) => {
  return (
    <>
      <View style={reviewTargetStyles.container}>
        {imageURI ? (
          <Image
            source={{
              uri: imageURI,
            }}
            style={reviewTargetStyles.image}
          />
        ) : (
          <EmptyMovie width={68} height={68} />
        )}

        <View style={reviewTargetStyles.wrap}>
          <Typography style="Label2">작성할 리뷰 영화</Typography>
          <Typography style="Title2" numberOfLines={1}>
            {title}
          </Typography>
          <Typography style="Body2">{director}</Typography>
        </View>
      </View>
      <Divider height={1} mt={16} />
    </>
  );
};

export default ReviewTarget;
