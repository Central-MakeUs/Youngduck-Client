import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import Gallery from '@/assets/icons/gallery.svg';
import {Image, TouchableOpacity, View} from 'react-native';
import {galleryStyles} from './ScreeningGallery.style';
import RoundButton from '@/components/buttons/roundButton';
import SvgIcons from '@/assets/svgIcons';
import permissionUtil from '@/utils/permissionUtil';
import {APP_PERMISSION_CODE} from '@/constants/permissionCodes';

const ScreeningGallery = () => {
  const handlePermissionGallery = () => {
    console.log('권한 설정');
    permissionUtil.cmmReqPermis([...APP_PERMISSION_CODE.picture]);
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
          }}
          style={galleryStyles.image}
        />
        <TouchableOpacity onPress={handlePermissionGallery} activeOpacity={0.8}>
          <Gallery />
        </TouchableOpacity>
      </View>
      <View style={galleryStyles.proContainer}>
        <Typography style="Body2" color={palette.Text.Alternative}>
          이미지를 추가로 업로드하려면?
        </Typography>
        <RoundButton onPress={() => {}} bg={palette.Fill.Normal} px={8} py={4}>
          <View style={galleryStyles.button}>
            <Typography
              style="Chips1"
              color={palette.Text.Alternative}
              mr={5.14}>
              Pro 사용하기
            </Typography>
            <SvgIcons.RightArrowIcon />
          </View>
        </RoundButton>
      </View>
    </View>
  );
};
export default ScreeningGallery;
