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
  const {setWebviewIsVisited} = useWebviewStore();

  useEffect(() => {
    const handleBackPress = () => {
      setWebviewIsVisited(true);
      stackNavigation.navigate(stackScreens.DetailScreen, {id: params.id});
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [params.id, setWebviewIsVisited, stackNavigation]);
  // params.uri
  return <WebView source={{uri: 'https://www.naver.com'}} style={{flex: 1}} />;
};
export default DetailWebviewScreen;
