import stackScreens from '@/constants/stackScreens';
import {ScreenRouteProp} from '@/types/navigator';
import {SafeAreaView} from 'react-native';
import WebView from 'react-native-webview';

interface IAgreementScreenProp {
  route: ScreenRouteProp<stackScreens.AgreementScreen>;
}

const AgreementScreen = ({route: {params}}: IAgreementScreenProp) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        source={{
          uri: params.uri,
        }}
      />
    </SafeAreaView>
  );
};

export default AgreementScreen;
