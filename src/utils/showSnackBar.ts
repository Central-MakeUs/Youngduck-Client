import Toast from 'react-native-toast-message';

export const showSnackBar = (text: string) => {
  Toast.show({
    type: 'selectedToast',
    text1: text,
    position: 'bottom',
    visibilityTime: 3000,
  });
};
