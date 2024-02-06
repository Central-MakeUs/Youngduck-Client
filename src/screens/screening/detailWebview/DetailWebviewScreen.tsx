import {useEffect} from 'react';
import WebView from 'react-native-webview';

import {useWebviewStore} from '@/stores/webview';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

const DetailWebviewScreen = () => {
  const {setWebview, webview} = useWebviewStore();
  const {bottom} = useSafeAreaInsets();

  useEffect(() => {
    setWebview({...webview, isVisited: true});
  }, []);

  return (
    <SafeAreaView style={{flex: 1, paddingBottom: bottom}}>
      <WebView source={{uri: webview.uri}} style={{flex: 1}} />
    </SafeAreaView>
  );
};
export default DetailWebviewScreen;
