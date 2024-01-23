import Typography from '@/components/typography';
import {Image} from 'react-native';
import {View} from 'react-native';
import reviewTargetStyls from './ReviewTarget.style';
import Divider from '@/components/divider';

interface IReviewTargetProps {
  imageURI: string;
  title: string;
  director: string;
}

const ReviewTarget = ({imageURI, title, director}: IReviewTargetProps) => {
  return (
    <>
      <View style={reviewTargetStyls.container}>
        <Image
          source={{
            uri: imageURI,
          }}
          style={reviewTargetStyls.image}
        />
        <View style={{justifyContent: 'space-between'}}>
          <Typography style="Label2">작성할 리뷰 영화</Typography>
          <Typography style="Title2">{title}</Typography>
          <Typography style="Body2">{director}</Typography>
        </View>
      </View>
      <Divider height={1} mt={16} />
    </>
  );
};

export default ReviewTarget;
