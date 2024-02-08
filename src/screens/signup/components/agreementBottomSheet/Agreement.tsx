import {IAgreementProps} from '@/types/signup/agreement';
import TextButtonContainer from '../inputGenre/TextButtonContainer';
import Typography from '@/components/typography';
import CheckBox from '@/components/checkBox';
import useHandleAgreement from '@/hooks/useHandleAgreement';
import {Pressable, View} from 'react-native';
import useNavigator from '@/hooks/useNavigator';
import stackScreens from '@/constants/stackScreens';
import {BottomDrawerMethods} from 'react-native-animated-bottom-drawer';
import palette from '@/styles/theme/color';

interface IAgreement {
  bottomDrawerRef: React.RefObject<BottomDrawerMethods>;
  agreements: IAgreementProps[];
  setAgreements: React.Dispatch<React.SetStateAction<IAgreementProps[]>>;
}

const Agreement = ({
  bottomDrawerRef,
  agreements,
  setAgreements,
}: IAgreement) => {
  const {updateOneAgreement} = useHandleAgreement();
  const {stackNavigation} = useNavigator();

  const handleUpdateAgreement = (index: number) => {
    updateOneAgreement({
      agreements,
      index,
      setAgreements,
    });
  };

  const goToAgreement = (uri: string) => {
    bottomDrawerRef.current?.close();
    stackNavigation.navigate(stackScreens.AgreementScreen, {
      uri,
    });
  };

  return (
    <>
      {agreements.map((term: IAgreementProps, index: number) => (
        <TextButtonContainer mb={24} key={`${term.content}container`}>
          <View style={{flexDirection: 'row'}}>
            <Typography
              style="Body1"
              key={`${term.content}-${term.type}`}
              color={palette.Text.Strong}>
              {term.type}
            </Typography>
            <Typography style="Body1" key={`${term.content}-content`}>
              {` ${term.content}`}
            </Typography>
            <Pressable onPress={() => goToAgreement(term.uri)}>
              <Typography
                style="Body1"
                key={`${term.content}-webview`}
                color={palette.Text.Alternative}>
                {` (내용보기)`}
              </Typography>
            </Pressable>
          </View>
          <CheckBox
            state={term.isAgree ? 'on' : 'off'}
            onPress={() => handleUpdateAgreement(index)}
            key={`${term.content}checkbox`}
          />
        </TextButtonContainer>
      ))}
    </>
  );
};

export default Agreement;
