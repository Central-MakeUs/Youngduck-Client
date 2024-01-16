import useNavigator from '@/hooks/useNavigator';
import {Pressable, Text, View} from 'react-native';

const MyPageScreen = () => {
  const {stackNavigation} = useNavigator();
  // 스크리닝 상세 페이지로 이동
  const handleGoScreeningDetail = () => {
    // TODO: 디테일 페이지 id값 param 전달
    stackNavigation.navigate('DetailScreen', {id: 1});
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
