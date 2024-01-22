import BackTopBar from '@/components/topBar/backTopBar';
import useNavigator from '@/hooks/useNavigator';
import {useRef, useState} from 'react';
import {Animated, SafeAreaView, ScrollView, View} from 'react-native';
import ProgressBar from '../../components/progressBar';
import moveScreen from '@/utils/moveScreen';
import signupScreenStyles from './SignupScreen.style';
import InputNickname from './components/inputNickname';
import InputGenre from './components/inputGenre';

function SignupScreen() {
  const [currentScreen, setCurrentScreen] = useState<number>(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const {stackNavigation} = useNavigator();

  const animatedValue = useRef(new Animated.Value(0)).current;

  const handleMoveScreen = ({status}: {status: 'next' | 'previous'}) => {
    moveScreen({
      scrollViewRef,
      animatedValue,
      currentScreen,
      setCurrentScreen,
      status,
      totalScreens: 2,
    });
  };

  return (
    <SafeAreaView style={signupScreenStyles.container}>
      <BackTopBar
        onPress={() =>
          currentScreen
            ? handleMoveScreen({status: 'previous'})
            : stackNavigation.goBack()
        }
      />
      <View>
        <ProgressBar totalScreens={2} animatedValue={animatedValue} />
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}>
        <View style={signupScreenStyles.commonContainer}>
          <InputNickname
            handleMoveScreen={() => handleMoveScreen({status: 'next'})}
          />
        </View>
        <View style={signupScreenStyles.commonContainer}>
          <InputGenre />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignupScreen;
