import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import * as KakaoLogin from '@react-native-seoul/kakao-login';
import {postLoginUser} from '@/apis/user';

function HomeScreen() {
  const handleSignInKakao = async (): Promise<void> => {
    KakaoLogin.login()
      .then(async result => {
        console.log('Login Success', JSON.stringify(result));
        const idToken = result.idToken;
        console.log('성공', idToken);
        const withoutComma = idToken.replace(/"/g, '');
        const res = postLoginUser('KAKAO', withoutComma);
        console.log('로그인 응답', res);
        getProfile();
      })
      .catch(error => {
        if (error.code === 'E_CANCELLED_OPERATION') {
          console.log('Login Cancel', error.message);
        } else {
          console.log(`Login Fail(code:${error.code})`, error.message);
        }
      });
  };

  const getProfile = () => {
    KakaoLogin.getProfile()
      .then(result => {
        //console.log('GetProfile Success', JSON.stringify(result));
      })
      .catch(error => {
        //console.log(`GetProfile Fail(code:${error.code})`, error.message);
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
