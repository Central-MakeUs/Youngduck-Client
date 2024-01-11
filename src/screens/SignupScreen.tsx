import BackTopBar from '@/components/topBar/backTopBar';
import {SafeAreaView, ScrollView, Text} from 'react-native';

function SignupScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <BackTopBar />
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{borderWidth: 2}}>
        <Text>SignupScreen</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignupScreen;
