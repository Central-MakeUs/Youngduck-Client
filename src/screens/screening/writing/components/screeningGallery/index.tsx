import {Image, TouchableOpacity, View} from 'react-native';

import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import Gallery from '@/assets/icons/gallery.svg';
import {checkAndRequestPermission} from '@/services/permissionService';
import {Permissions} from '@/models/enums/permission';
import permissionAlert from '@/services/permissionAlert';
import {galleryStyles} from './ScreeningGallery.style';
import {handleImageSelect} from '@/services/imagePicker';
import {uploadScreeningImage} from '@/services/imageService';

interface ScreeningGaleeryProps {
  image: string;
  setImage: (image: string) => void;
}
const ScreeningGallery = ({image, setImage}: ScreeningGaleeryProps) => {
  // 갤러리 접근해 이미지 가져오기
  const handleImageUpload = async () => {
    const image = await handleImageSelect();

    if (image?.assets) {
      const res = await uploadScreeningImage(image?.assets[0].uri || '');
      setImage(res);
    }
  };

  const handleClickGallery = async () => {
    const result = await checkAndRequestPermission(Permissions.PhotoLibrary);
    if (result === 'granted') {
      handleImageUpload();
    }
    if (result === 'blocked') {
      permissionAlert();
    }
  };
  return (
    <View>
      <Typography style="Label2" color={palette.Text.Strong} mb={4}>
        상영회 이미지
      </Typography>
      <View style={galleryStyles.imageContainer}>
        {image && (
          <Image
            source={{
              uri: image,
            }}
            style={galleryStyles.image}
          />
        )}
        <TouchableOpacity onPress={handleClickGallery} activeOpacity={0.8}>
          <Gallery />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ScreeningGallery;
