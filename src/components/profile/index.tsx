import {Image, ImageSourcePropType} from 'react-native';
import {profileStyles} from './Profile.style';
import {defaultImages} from '@/assets';

interface ProfileProps {
  size?: 'small' | 'large';
  profile?: ImageSourcePropType;
}

const Profile = ({
  size = 'small',
  profile = defaultImages.profile1,
}: ProfileProps) => {
  return <Image source={profile} style={profileStyles[size]} />;
};
export default Profile;
