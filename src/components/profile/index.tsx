import {Image, TouchableOpacity} from 'react-native';
import {profileStyles} from './Profile.style';
import useNavigator from '@/hooks/useNavigator';
import {defaultImages} from '@/assets';

interface ProfileProps {
  size?: 'small' | 'large';
}

const Profile = ({size = 'small'}: ProfileProps) => {
  const {stackNavigation} = useNavigator();
  const handleGoMyPage = () => {
    stackNavigation.navigate('MyPageScreen');
  };
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handleGoMyPage}>
      <Image source={defaultImages.profile1} style={profileStyles.image} />
    </TouchableOpacity>
  );
};
export default Profile;
