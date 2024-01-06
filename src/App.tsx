import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Navigator from './navigators/Navigator';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Navigator />
    </QueryClientProvider>
  );
}

//export default App;

// 스토리북으로 확인할 때 App 주석 후 아래 주석 풀고 사용
import StorybookUIRoot from '../.ondevice/Storybook';
export {StorybookUIRoot as default};
