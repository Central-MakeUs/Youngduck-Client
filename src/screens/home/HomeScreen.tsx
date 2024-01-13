import useNavigator from '@/hooks/useNavigator';
import {Pressable, Text, View} from 'react-native';

function HomeScreen() {
  const {stackNavigation} = useNavigator();
  const handleGoMyPage = () => {
    stackNavigation.navigate('MyPageScreen');
  };
  return (
    <View>
      <Text>Home Screen</Text>
      <Pressable onPress={handleGoMyPage}>
        <Text>마이페이지로 이동</Text>
      </Pressable>
    </View>
  );
}

export default HomeScreen;
