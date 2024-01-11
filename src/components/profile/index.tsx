import {Image} from 'react-native';
import {profileStyles} from './Profile.style';

const Profile = () => {
  // TODO: 유저 uri 값 zustand 꺼내기
  // TODO: 클릭 시 마이 페이지로 이동
  return (
    <Image
      source={{
        uri: 'https://cdn.pixabay.com/photo/2023/12/27/14/37/ai-generated-8472201_1280.png',
      }}
      style={profileStyles.image}
    />
  );
};
export default Profile;
