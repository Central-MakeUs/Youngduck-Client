import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import * as KakaoLogin from '@react-native-seoul/kakao-login';
import {postLoginUser} from '@/apis/user';
import {getKakaoProfile} from '@/apis/social';
import AppleLogin from '@/components/auth/AppleLogin';

function HomeScreen() {
  const handleSignInKakao = async (): Promise<void> => {
    KakaoLogin.login()
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
    <SafeAreaView>
      <TouchableOpacity
        onPress={handleSignInKakao}
        style={styles.button}
        activeOpacity={0.8}>
        <Text>카카오 로그인</Text>
      </TouchableOpacity>
      <AppleLogin />
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
