import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import * as KakaoLogin from '@react-native-seoul/kakao-login';

function HomeScreen() {
  //const key = Config.KAKAO_NATIVE_APP_KEY_WITH_KAKAO;
  const handleSignInKakao = async (): Promise<void> => {
    KakaoLogin.login()
      .then(result => {
        console.log('Login Success', JSON.stringify(result));
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
        console.log('GetProfile Success', JSON.stringify(result));
      })
      .catch(error => {
        console.log(`GetProfile Fail(code:${error.code})`, error.message);
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
