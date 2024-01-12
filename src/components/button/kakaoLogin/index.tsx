import {TouchableOpacity} from 'react-native';
import kakaoLoginStyles from './KakaoLogin.style';
import Typography from '@/components/typography';
import KakoLogo from '@/assets/icons/kakao-logo.svg';

interface KakaoProps {
  onPress: () => void;
}
function KakaoLogin({onPress}: KakaoProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={kakaoLoginStyles.button}
      activeOpacity={0.8}>
      <KakoLogo />
      <Typography style="Body1" ml={16}>
        카카오 로그인
      </Typography>
    </TouchableOpacity>
  );
}

export default KakaoLogin;
