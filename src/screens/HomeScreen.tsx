import {SafeAreaView, Text} from 'react-native';
import Config from 'react-native-config';

function HomeScreen() {
  const key = Config.KAKAO_API_KEY;
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
}

export default HomeScreen;
