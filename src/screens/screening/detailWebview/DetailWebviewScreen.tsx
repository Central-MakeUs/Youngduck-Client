import stackScreens from '@/constants/stackScreens';
import useNavigator from '@/hooks/useNavigator';
import {useWebviewStore} from '@/stores/webview';
import {ScreenRouteProp} from '@/types/navigator';
import {useEffect} from 'react';
import {BackHandler} from 'react-native';
import WebView from 'react-native-webview';

interface IDetailWebviewScreen {
  route: ScreenRouteProp<stackScreens.DetailWebviewScreen>;
}
const DetailWebviewScreen = ({route: {params}}: IDetailWebviewScreen) => {
  const {stackNavigation} = useNavigator();
  const {setWebview, webview} = useWebviewStore();

  useEffect(() => {
    const handleBackPress = () => {
      setWebview({uri: '', isVisited: true});
      stackNavigation.navigate(stackScreens.DetailScreen, {id: params.id});
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [params.id, setWebview, stackNavigation]);

  return <WebView source={{uri: webview.uri}} style={{flex: 1}} />;
};
export default DetailWebviewScreen;
