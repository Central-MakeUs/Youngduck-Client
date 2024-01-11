import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Navigator from './navigators/Navigator';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  const queryClient = new QueryClient();

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000); //스플래시 활성화 시간
  });

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default App;

// 스토리북으로 확인할 때 App 주석 후 아래 주석 풀고 사용
// import StorybookUIRoot from '../.ondevice/Storybook';
// export {StorybookUIRoot as default};
