import {Alert, Linking} from 'react-native';

const permissionAlert = () => {
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
        onPress: () => {},
        style: 'cancel',
      },
    ],
  );
};
export default permissionAlert;
