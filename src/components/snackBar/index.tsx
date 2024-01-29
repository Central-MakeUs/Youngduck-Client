import {View} from 'react-native';
import Toast, {ToastConfig} from 'react-native-toast-message';

import Typography from '../typography';
import palette from '@/styles/theme/color';

import {snackBarStyle} from './SnackBar.style';

const SnackBar = () => {
  const toastConfig: ToastConfig = {
    selectedToast: ({text1 = ''}: {text1?: string}) => (
      <View style={snackBarStyle.container}>
        <Typography style="Label1" color={palette.Another.White}>
          {text1}
        </Typography>
      </View>
    ),
  };
  return <Toast config={toastConfig} />;
};

export default SnackBar;
