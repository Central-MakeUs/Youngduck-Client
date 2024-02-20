import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {TouchableOpacity} from 'react-native';
import lookAroundStyle from './LookAround.style';
import useNavigator from '@/hooks/useNavigator';
import stackScreens from '@/constants/stackScreens';
import {useUserStore} from '@/stores/user';

const LookAround = () => {
  const {stackNavigation} = useNavigator();
  const {user, setUser} = useUserStore();

  const goToLookAround = () => {
    setUser({...user, isLookAround: true});
    stackNavigation.reset({
      routes: [{name: stackScreens.BottomTabScreens}],
    });
  };
  return (
    <TouchableOpacity
      onPress={goToLookAround}
      style={lookAroundStyle.button}
      activeOpacity={0.8}>
      <Typography style="Body2" color={palette.Primary.Dark}>
        로그인 없이 둘러보기
      </Typography>
    </TouchableOpacity>
  );
};

export default LookAround;
