import useNavigator from '@/hooks/useNavigator';
import {Pressable, Text, View} from 'react-native';

const MyPageScreen = () => {
<<<<<<< HEAD
  const {stackNavigation} = useNavigator();
  // 스크리닝 상세 페이지로 이동
  const handleGoScreeningDetail = () => {
    // TODO: 디테일 페이지 id값 param 전달
    stackNavigation.navigate('DetailScreen', {id: 1});
=======
  const {screeningStackNavigation} = useNavigator();
  // 스크리닝 상세 페이지로 이동
  const handleGoScreeningDetail = () => {
    // TODO: 디테일 페이지 id값 param 전달
    screeningStackNavigation.navigate('DetailScreen', {id: 1});
>>>>>>> a601cc6e5033206e676542eed864d731e0581af8
  };
  return (
    <View>
      <Text>마이페이지</Text>
      <Pressable onPress={handleGoScreeningDetail}>
        <Text>스크리닝 상세 페이지로 이동</Text>
      </Pressable>
    </View>
  );
};
export default MyPageScreen;
