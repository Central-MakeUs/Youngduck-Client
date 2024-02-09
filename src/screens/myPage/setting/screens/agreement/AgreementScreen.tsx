import CancelTopBar from '@/components/topBar/cancelTopBar';
import stackScreens from '@/constants/stackScreens';
import {ScreenRouteProp} from '@/types/navigator';
import {View} from 'react-native';
import WebView from 'react-native-webview';

interface IAgreementScreenProp {
  route: ScreenRouteProp<stackScreens.AgreementScreen>;
}

const AgreementScreen = ({route: {params}}: IAgreementScreenProp) => {
  return (
    <>
      <CancelTopBar text={params.title} />
      <View style={{flex: 1}}>
        <WebView
          source={{
            uri: params.uri,
          }}
        />
      </View>
    </>
  );
};

export default AgreementScreen;
