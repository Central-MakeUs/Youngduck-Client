import appleAuth from '@invertase/react-native-apple-authentication';
import {TouchableOpacity} from 'react-native';
import AppleLogo from '@/assets/icons/apple-logo.svg';
import Typography from '../../typography';
import appleLoginStyle from './AppleLogin.style';
import useUserMutation from '@/hooks/mutaions/useUserMutation';
import {useUserStore} from '@/stores/user';
import {setAppleUser} from '@/services/localStorage/localStorage';

function AppleLogin() {
  const {loginMutate} = useUserMutation();
  const {user, setUser} = useUserStore();
  async function handleSignInApple() {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
    });

    const credentialState = await appleAuth.getCredentialStateForUser(
      appleAuthRequestResponse.user,
    );

    if (credentialState === appleAuth.State.AUTHORIZED) {
      setAppleUser(appleAuthRequestResponse.authorizationCode!);
      setUser({
        ...user,
        type: 'APPLE',
        name:
          appleAuthRequestResponse.fullName?.familyName! +
          appleAuthRequestResponse.fullName?.givenName!,
        email: appleAuthRequestResponse.email!,
      });
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
