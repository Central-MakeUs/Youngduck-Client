import {View} from 'react-native';

import {getScreenSize} from '@/utils/getScreenSize';
import WebView from 'react-native-webview';

const DetailWebviewScreen = () => {
  const {screenHeight, screenWidth} = getScreenSize();
  return (
    <View style={{height: screenHeight, width: screenWidth}}>
      <WebView source={{uri: 'https://www.naver.com'}} style={{flex: 1}} />
    </View>
  );
};
export default DetailWebviewScreen;
