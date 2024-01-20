import {Alert, Linking, Platform} from 'react-native';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

// 갤러리 접근 권한 허용 체크 => 갤러리 여는 함수를 인자로 전달
export const checkPermission = async (ImageCrop: () => void) => {
  const galleryPermission =
    Platform.OS === 'android'
      ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
      : PERMISSIONS.IOS.PHOTO_LIBRARY;
  try {
    const result = await check(galleryPermission);
    if (result === RESULTS.GRANTED) {
      return true;
    }

    request(galleryPermission).then(res => {
      if (res === 'blocked') {
        Alert.alert(
          '이미지를 업로드 하려면 갤러리 권한 허용이 필요합니다.',
          '앱 설정 화면을 열어서 항상 허용으로 바꿔주세요.',
          [
            {
              text: '네',
              onPress: () => Linking.openSettings(),
            },
            {
              text: '아니오',
              onPress: () => console.log('No Pressed'),
              style: 'cancel',
            },
          ],
        );
        return false;
      }
      ImageCrop();
      return false;
    });
  } catch (e) {
    console.log('에러 발생', e);
    return false;
  }
};
