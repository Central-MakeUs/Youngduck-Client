import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function FullGradientView({children}: {children: React.ReactNode}) {
  const {top, bottom} = useSafeAreaInsets();

  const style = createStyle(top, bottom);

  return (
    <LinearGradient
      colors={['rgba(255,240,143,1)', 'rgba(255,246,189,1)']}
      style={style.container}>
      {children}
    </LinearGradient>
  );
}

const createStyle = (top: number, bottom: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: top,
      paddingBottom: bottom,
    },
  });

export default FullGradientView;
