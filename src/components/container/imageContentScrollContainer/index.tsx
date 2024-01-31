import BackTitleTopBar from '@/components/topBar/backTitleTopBar';
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
}

const ImageContentScrollContainer = ({
  children,
  title,
  posterImage,
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

  return (
    <View
      style={[
        imageContentScrollContainerStyles.container,
        {paddingBottom: bottom},
      ]}>
      <View style={imageContentScrollContainerStyles.topBarWrap}>
        <BackTitleTopBar opacity={opacity} goBack={handleGoBack} text={title} />
      </View>
      <ScrollView
        style={imageContentScrollContainerStyles.container}
        scrollEventThrottle={16}
        onScroll={calculateOpacity}
        bounces={false}>
        <View style={{opacity: opacity}}>
          {!!posterImage ? (
            <Image
              source={{
                uri: posterImage,
              }}
              style={imageContentScrollContainerStyles.image}
            />
          ) : (
            <View
              style={[
                imageContentScrollContainerStyles.image,
                {backgroundColor: 'white'},
              ]}
            />
          )}
          <LinearGradient
            colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0)']}
            style={imageContentScrollContainerStyles.imageBlur}
          />
        </View>
        <ScrollView style={imageContentScrollContainerStyles.container}>
          {children}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default ImageContentScrollContainer;
