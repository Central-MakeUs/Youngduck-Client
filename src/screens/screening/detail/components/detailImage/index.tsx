import {Image} from 'react-native';
import {detailImageStyle} from './DetailImage.style';

const DetailImage = () => {
  return (
    <Image
      source={{
        uri: 'https://cdn.pixabay.com/photo/2017/07/13/23/11/cinema-2502213_1280.jpg',
      }}
      style={detailImageStyle.image}
    />
  );
};
export default DetailImage;
