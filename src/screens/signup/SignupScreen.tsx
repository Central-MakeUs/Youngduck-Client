import BoxButton from '@/components/buttons/boxButton';
import TextInput from '@/components/textInput';
import BackTopBar from '@/components/topBar/backTopBar';
import SubTitleTopBar from '@/components/topBar/subTitleTopBar';
import Typography from '@/components/typography';
import useNavigator from '@/hooks/useNavigator';
import {useRef, useState} from 'react';
import {Dimensions, SafeAreaView, ScrollView, View} from 'react-native';
import ProgressBar from './components/progressBar';

function SignupScreen() {
  const [nickname, setNickname] = useState<string>('');
  const [currentScreen, setCurrentScreen] = useState<number>(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const {width} = Dimensions.get('screen');
  const {stackNavigation} = useNavigator();

  const previousScreen = () => {
    scrollViewRef?.current?.scrollTo({x: -width, animated: true});
    setCurrentScreen(0);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <BackTopBar
        onPress={() =>
          currentScreen ? previousScreen() : stackNavigation.goBack()
        }
      />
      <ScrollView
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}>
        <ProgressBar currentScreen={currentScreen} />
        <View style={{width, justifyContent: 'space-between'}}>
          <View>
            <SubTitleTopBar
              text="닉네임을 설정해주세요"
              subTitle={`닉네임은 자신의 활동명이 될거에요\n변경하고 싶다면 설정에 변경할 수 있어요`}
            />
            <TextInput
              value={nickname}
              placeholder="닉네임을 입력해주세요"
              onChangeInput={e => setNickname(e)}
              title="닉네임"
              content="닉네임을 입력해주세요"
              maxLength={10}
            />
          </View>
          <BoxButton
            onPress={() => {
              scrollViewRef?.current?.scrollToEnd();
              setCurrentScreen(1);
            }}
            style={{}}>
            다음
          </BoxButton>
        </View>
        <View style={{width}}>
          <Typography style="Title1">Hello World</Typography>
          <BoxButton onPress={() => {}}>다음</BoxButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignupScreen;
