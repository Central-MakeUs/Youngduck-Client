import appleAuth from '@invertase/react-native-apple-authentication';
import {TouchableOpacity} from 'react-native';
import AppleLogo from '@/assets/icons/apple-logo.svg';
import Typography from '../../typography';
import appleLoginStyle from './AppleLogin.style';
import useLoginMutation from '@/hooks/mutaions/useLoginMutation';

function AppleLogin() {
  const {loginMutate} = useLoginMutation();

  async function handleSignInApple() {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
    });

    const credentialState = await appleAuth.getCredentialStateForUser(
      appleAuthRequestResponse.user,
    );
    console.log(appleAuthRequestResponse);
    if (credentialState === appleAuth.State.AUTHORIZED) {
      console.log('인증된 유저');
      loginMutate({
        type: 'APPLE',
        token: appleAuthRequestResponse.identityToken!,
      });
    }
  }

  return (
    <TouchableOpacity
      style={appleLoginStyle.button}
      onPress={handleSignInApple}
      activeOpacity={0.8}>
      <AppleLogo />
      <Typography style="Body1" ml={16} color="#ffffff">
        Apple계정으로 시작하기
      </Typography>
    </TouchableOpacity>
  );
}

export default AppleLogin;
