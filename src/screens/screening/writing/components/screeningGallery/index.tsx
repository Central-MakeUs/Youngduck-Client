import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import Gallery from '@/assets/icons/gallery.svg';
import {Image, TouchableOpacity, View} from 'react-native';
import {galleryStyles} from './ScreeningGallery.style';
import RoundButton from '@/components/buttons/roundButton';
import SvgIcons from '@/assets/svgIcons';
import ImageCropPicker from 'react-native-image-crop-picker';
import {checkPermission} from '@/utils/checkPermission';

const ScreeningGallery = () => {
  // 갤러리 접근해 이미지 가져오기
  const handleImageUpload = async () => {
    try {
      const image = await ImageCropPicker.openPicker({
        mediaType: 'photo',
        includeBase64: true,
        width: 120,
        height: 120,
      });
      if (image?.path) {
        console.log('이미지 경로', image.path);
        // TODO: 백엔드 api 통신
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleClickGallery = async () => {
    // 갤러리 이미지 접근 권한 허용
    const res = await checkPermission(() => {
      handleImageUpload();
    });
    if (res) {
      handleImageUpload();
    }
  };
  return (
    <View>
      <Typography style="Label2" color={palette.Text.Strong} mb={4}>
        상영회 이미지
      </Typography>
      <View style={galleryStyles.imageContainer}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2017/07/13/23/11/cinema-2502213_1280.jpg',
            // TODO: 백엔드 api 응답 uri 넣기
          }}
          style={galleryStyles.image}
        />
        <TouchableOpacity onPress={handleClickGallery} activeOpacity={0.8}>
          <Gallery />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ScreeningGallery;
