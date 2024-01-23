import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import gradientContainerStyles from './GradientContainer.style';

interface IGradientContainerProps {
  children: React.ReactNode;
  colors: [string, string];
  end?: {x: number; y: number};
}

function GradientContainer({
  children,
  colors,
  end = {x: 0, y: 1},
}: IGradientContainerProps) {
  const {top, bottom} = useSafeAreaInsets();

  const style = gradientContainerStyles({top, bottom});

  return (
    <LinearGradient
      colors={colors}
      start={{x: 0, y: 0}}
      end={end}
      style={style.container}>
      {children}
    </LinearGradient>
  );
}

export default GradientContainer;
