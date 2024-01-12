import {Image, TouchableOpacity} from 'react-native';
import {profileStyles} from './Profile.style';
import useNavigator from '@/hooks/useNavigator';

const Profile = () => {
  const {stackNavigation} = useNavigator();
  const handleGoMyPage = () => {
    stackNavigation.navigate('MyPageScreen');
  };
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handleGoMyPage}>
      <Image
        source={{
          //임의로 uri 넣어줌 => TODO: 유저 uri 값 zustand 꺼내기
          uri: 'https://cdn.pixabay.com/photo/2023/12/27/14/37/ai-generated-8472201_1280.png',
        }}
        style={profileStyles.image}
      />
    </TouchableOpacity>
  );
};
export default Profile;
