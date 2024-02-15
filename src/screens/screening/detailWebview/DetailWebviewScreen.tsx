import {useEffect} from 'react';
import WebView from 'react-native-webview';

import {useWebviewStore} from '@/stores/webview';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CancelTopBar from '@/components/topBar/cancelTopBar';
import {View} from 'react-native';

const DetailWebviewScreen = () => {
  const {setWebview, webview} = useWebviewStore();
  const {bottom} = useSafeAreaInsets();

  useEffect(() => {
    setWebview({...webview, isVisited: true});
  }, []);
  return (
    <>
      <CancelTopBar text="관람신청" />
      <View style={{flex: 1, paddingBottom: bottom}}>
        <WebView
          originWhitelist={['http://*', 'https://*', 'intent://*']}
          onShouldStartLoadWithRequest={event => {
            if (event.url.includes('%20')) {
              setWebview({...webview, uri: event.url.replace(/%20/g, '')});
              return false;
            }
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
      </View>
    </>
  );
};
export default DetailWebviewScreen;
