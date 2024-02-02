import {useEffect} from 'react';
import WebView from 'react-native-webview';

import {useWebviewStore} from '@/stores/webview';

const DetailWebviewScreen = () => {
  const {setWebview, webview} = useWebviewStore();

  useEffect(() => {
    setWebview({...webview, isVisited: true});
  }, []);

  return <WebView source={{uri: webview.uri}} style={{flex: 1}} />;
};
export default DetailWebviewScreen;
