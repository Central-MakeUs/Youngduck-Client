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
import {usePosterImageStore} from '@/stores/posterImage';

interface IImageContentScrollContainerProp {
  children: React.ReactNode;
}

const ImageContentScrollContainer = ({
  children,
}: IImageContentScrollContainerProp) => {
  // To-do image 크기를 정사각형으로 할지 -> 현재 코드 사용
  // 혹은 이미지 비율 그대로 가져와서 사용할지  -> image 크기 구해서 적용하는 코드로 수정
  const {stackNavigation} = useNavigator();
  const {screenWidth} = getScreenSize();
  const {top, bottom} = useSafeAreaInsets();
  const {posterImage} = usePosterImageStore();

  const [opacity, setOpacity] = useState<number>(1);

  const handleGoBack = () => stackNavigation.goBack();

  const calculateOpacity = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const value =
      1 - e.nativeEvent.contentOffset.y / (screenWidth * 1.47 - (top + 60));
    setOpacity(value < 0 ? 0 : value);
  };

  return (
    <View
      style={[
        imageContentScrollContainerStyles.container,
        {paddingBottom: bottom},
      ]}>
      <View style={imageContentScrollContainerStyles.topBarWrap}>
        <BackTitleTopBar
          opacity={opacity}
          goBack={handleGoBack}
          text="1월 첫째주 팝콘작"
        />
      </View>
      <ScrollView
        style={imageContentScrollContainerStyles.container}
        scrollEventThrottle={16}
        onScroll={calculateOpacity}
        bounces={false}>
        <View style={{opacity: opacity}}>
          <Image
            source={{
              uri: posterImage,
            }}
            style={imageContentScrollContainerStyles.image}
          />
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
