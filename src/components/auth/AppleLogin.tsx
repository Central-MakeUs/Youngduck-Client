import appleAuth, {
  AppleButton,
} from '@invertase/react-native-apple-authentication';

function AppleLogin() {
  return (
    <AppleButton
      buttonStyle={AppleButton.Style.WHITE}
      buttonType={AppleButton.Type.SIGN_IN}
      style={{
        width: '100%', // You must specify a width
        height: 45, // You must specify a height
      }}
      onPress={() => {}}
    />
  );
}

export default AppleLogin;
