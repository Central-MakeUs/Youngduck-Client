import {getKakaoProfile} from '@/apis/social';
import {postLoginUser} from '@/apis/user';
import * as Kakao from '@react-native-seoul/kakao-login';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

function KakaoLogin() {
  const handleSignInKakao = async (): Promise<void> => {
    Kakao.login()
      .then(async result => {
        const idToken = result.idToken;
        const res = postLoginUser('KAKAO', idToken);
        console.log('로그인 응답', res);
        getKakaoProfile();
      })
      .catch(error => {
        if (error.code === 'E_CANCELLED_OPERATION') {
          console.log('Login Cancel', error.message);
        } else {
          console.log(`Login Fail(code:${error.code})`, error.message);
        }
      });
  };
  return (
    <TouchableOpacity
      onPress={handleSignInKakao}
      style={styles.button}
      activeOpacity={0.8}>
      <Text>카카오 로그인</Text>
    </TouchableOpacity>
  );
}

export default KakaoLogin;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
