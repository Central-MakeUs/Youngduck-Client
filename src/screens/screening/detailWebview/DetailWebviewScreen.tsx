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

  console.log(webview.uri);

  return (
    <SafeAreaView style={{flex: 1, paddingBottom: bottom}}>
      <WebView
        source={{uri: 'https://forms.gle/zvVDyerCddtSay7U9'}}
        style={{flex: 1}}
      />
    </SafeAreaView>
  );
};
export default DetailWebviewScreen;
