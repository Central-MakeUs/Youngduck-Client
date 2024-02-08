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
      <WebView
        originWhitelist={['http://*', 'https://*', 'intent://*']}
        onShouldStartLoadWithRequest={event => {
          if (event.url.startsWith('intent:')) {
            // forms.gle 형태로 넘어올 경우 url 변환 작업
            const convertUri = event.url
              .split('browser_fallback_url=')[1]
              .split('%3')[0];
            setWebview({...webview, uri: convertUri});

            return false;
          }
          return true;
        }}
        source={{uri: webview.uri}}
      />
    </SafeAreaView>
  );
};
export default DetailWebviewScreen;
