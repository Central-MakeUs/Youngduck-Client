import {Alert, Linking, Platform} from 'react-native';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';

// 갤러리 접근 권한 허용 체크
export const checkPermission = async () => {
  try {
    if (Platform.OS === 'android') {
      const result = await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
      if (result === RESULTS.BLOCKED || result === RESULTS.DENIED) {
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
      return true;
    } else if (Platform.OS === 'ios') {
      const result = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
      if (result === RESULTS.BLOCKED || result === RESULTS.DENIED) {
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
      return true;
    } else {
      console.log('디바이스를 찾을 수 없습니다');
    }
  } catch (e) {
    console.log('에러 발생', e);
    return false;
  }
};
