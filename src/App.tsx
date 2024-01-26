import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-svg';

import Navigator from './navigators/Navigator';
import {setupAlarm} from './services/alarmService';

setupAlarm();

function App() {
  const queryClient = new QueryClient();

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
//import StorybookUIRoot from '../.ondevice/Storybook';
//export {StorybookUIRoot as default};
