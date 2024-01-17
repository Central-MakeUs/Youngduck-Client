import appleAuth, {
  AppleButton,
} from '@invertase/react-native-apple-authentication';

async function handleSignInApple() {
  const appleAuthRequestResponse = await appleAuth.performRequest({
    requestedOperation: appleAuth.Operation.LOGIN,
    requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
  });

  const credentialState = await appleAuth.getCredentialStateForUser(
    appleAuthRequestResponse.user,
  );

  if (credentialState === appleAuth.State.AUTHORIZED) {
    console.log('인증된 유저');
  }
}

function AppleLogin() {
  return (
    <AppleButton
      buttonStyle={AppleButton.Style.WHITE}
      buttonType={AppleButton.Type.SIGN_IN}
      style={{
        width: '100%',
        height: 45,
      }}
      onPress={handleSignInApple}
    />
  );
}

export default AppleLogin;
