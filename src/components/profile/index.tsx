import {Image, ImageSourcePropType, TouchableOpacity} from 'react-native';
import {profileStyles} from './Profile.style';
import useNavigator from '@/hooks/useNavigator';
import {defaultImages} from '@/assets';

interface ProfileProps {
  size?: 'small' | 'large';
  profile?: ImageSourcePropType;
}

const Profile = ({
  size = 'small',
  profile = defaultImages.profile1,
}: ProfileProps) => {
  const {stackNavigation} = useNavigator();
  const handleGoMyPage = () => {
    stackNavigation.navigate('MyPageScreen');
  };
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handleGoMyPage}>
      <Image source={profile} style={profileStyles[size]} />
    </TouchableOpacity>
  );
};
export default Profile;
