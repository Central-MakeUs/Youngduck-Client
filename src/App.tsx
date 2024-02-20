import {useEffect} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-svg';

import Navigator from './navigators/Navigator';
import {alarmTest, setupAlarm} from './services/alarmService';
import ErrorBoundary from 'react-native-error-boundary';
import ErrorPage from './components/pages/errorPage';

setupAlarm();

function App() {
  useEffect(() => {
    alarmTest();
  }, []);
  const queryClient = new QueryClient();

  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <Navigator />
        </SafeAreaProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;

// 스토리북으로 확인할 때 App 주석 후 아래 주석 풀고 사용
//import StorybookUIRoot from '../.ondevice/Storybook';
//export {StorybookUIRoot as default};
