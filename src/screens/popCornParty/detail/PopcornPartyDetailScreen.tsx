import {
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  View,
} from 'react-native';
import popcornPartyDetailScreenStyles from './popcornPartyDetailScreen.style';
import BackTitleTopBar from '@/components/topBar/backTitleTopBar';
import useNavigator from '@/hooks/useNavigator';
import {getScreenSize} from '@/utils/getScreenSize';
import {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

function PopcornPartyDetailScreen() {
  const {stackNavigation} = useNavigator();
  const {screenWidth} = getScreenSize();
  const {top} = useSafeAreaInsets();

  const [opacity, setOpacity] = useState<number>(1);

  const handleGoBack = () => stackNavigation.goBack();

  const calculateOpacity = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const value =
      1 - e.nativeEvent.contentOffset.y / (screenWidth - (top + 60));
    setOpacity(value < 0 ? 0 : value);
  };

  return (
    <View style={popcornPartyDetailScreenStyles.container}>
      <BackTitleTopBar
        opacity={opacity}
        goBack={handleGoBack}
        text="1월 첫째주 팝콘작"
      />
      <ScrollView
        style={popcornPartyDetailScreenStyles.container}
        scrollEventThrottle={16}
        onScroll={calculateOpacity}
        bounces={false}>
        <View style={{opacity: opacity}}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9C_se7NWEVh0Yigz0mxRBfSpQSxkcWZmAA&usqp=CAU',
            }}
            style={popcornPartyDetailScreenStyles.image}
          />
          <LinearGradient
            colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0)']}
            style={popcornPartyDetailScreenStyles.imageBlur}
          />
        </View>
        <ScrollView style={{flex: 1}}>
          <Text style={{height: 1000}}>아야어여</Text>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

export default PopcornPartyDetailScreen;
