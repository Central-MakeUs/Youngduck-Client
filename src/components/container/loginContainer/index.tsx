import {Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import loginContainerStyles from './LoginContainer.style';
import {defaultImages} from '@/assets';
import {getScreenSize} from '@/utils/getScreenSize';

function LoginContainer({children}: {children: React.ReactNode}) {
  const {top, bottom} = useSafeAreaInsets();
  const {screenWidth: width, screenHeight: height} = getScreenSize();

  const style = loginContainerStyles({top, bottom, width, height});

  return (
    <LinearGradient
      colors={['rgba(255,240,143,1)', 'rgba(255,246,189,1)']}
      style={style.container}>
      <Image source={defaultImages.loginPopcorn} style={style.image} />
      {children}
    </LinearGradient>
  );
}

export default LoginContainer;
