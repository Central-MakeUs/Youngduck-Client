import BackTitleTopBar from '@/components/topBar/backTitleTopBar';
import EmptyPoster from '@/assets/icons/empty-poster.svg';
import useNavigator from '@/hooks/useNavigator';
import {getScreenSize} from '@/utils/getScreenSize';
import {useState} from 'react';
import {
  View,
  ScrollView,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import imageContentScrollContainerStyles from './imageContentScrollContainer.style';

interface IImageContentScrollContainerProp {
  children: React.ReactNode;
  title: string;
  posterImage: string;
  imageSize: {width: number; height: number};
}

const ImageContentScrollContainer = ({
  children,
  title,
  posterImage,
  imageSize,
}: IImageContentScrollContainerProp) => {
  const {stackNavigation} = useNavigator();
  const {screenWidth} = getScreenSize();
  const {top, bottom} = useSafeAreaInsets();

  const [opacity, setOpacity] = useState<number>(1);

  const handleGoBack = () => stackNavigation.goBack();

  const calculateOpacity = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const value =
      1 - e.nativeEvent.contentOffset.y / (screenWidth - (top + 60));
    setOpacity(value < 0 ? 0 : value);
  };
  const styles = imageContentScrollContainerStyles({
    width: imageSize.width,
    height: imageSize.height,
  });
  return (
    <View style={[styles.container, {paddingBottom: bottom}]}>
      <View style={styles.topBarWrap}>
        <BackTitleTopBar opacity={opacity} goBack={handleGoBack} text={title} />
      </View>
      <ScrollView
        style={styles.container}
        scrollEventThrottle={16}
        onScroll={calculateOpacity}
        bounces={false}>
        <View style={{opacity: opacity}}>
          {!!posterImage ? (
            <Image
              source={{
                uri: posterImage,
              }}
              style={styles.image}
            />
          ) : (
            <EmptyPoster width={screenWidth} height={screenWidth * 1.48} />
          )}
          <LinearGradient
            colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0)']}
            style={styles.imageBlur}
          />
        </View>
        <ScrollView bounces={false} style={styles.container}>
          {children}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default ImageContentScrollContainer;
