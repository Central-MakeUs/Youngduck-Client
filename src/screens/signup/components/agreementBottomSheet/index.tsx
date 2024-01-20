import BottomSheet from '@/components/bottomSheet';
import SubTitleDescription from '@/components/title/subTitleDescription';
import SubTitle from '@/components/title/subTitle';
import CheckBox from '@/components/checkBox';
import Divider from '@/components/divider';
import BoxButton from '@/components/buttons/boxButton';
import {BottomDrawerMethods} from 'react-native-animated-bottom-drawer';
import {TGenre} from '@/types/signup/genre';
import useNavigator from '@/hooks/useNavigator';
import {useState} from 'react';
import useHandleAgreement from '@/hooks/useHandleAgreement';
import {IAgreementProps} from '@/types/signup/agreement';
import Agreement from './Agreement';
import TextButtonContainer from '../inputGenre/TextButtonContainer';
import stackScreens from '@/constants/stackScreens';
import {View} from 'react-native';
import {agreeBottomSheetStyles} from './AgreeBottomSheet.style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface IAgreementBottomSheetProps {
  bottomDrawerRef: React.RefObject<BottomDrawerMethods>;
  selectedGenres: TGenre[];
}

const AgreeBottomSheet = ({bottomDrawerRef}: IAgreementBottomSheetProps) => {
  const {bottom} = useSafeAreaInsets();
  const [allAgreement, setAllAgreement] = useState<boolean>(false);
  const {stackNavigation} = useNavigator();
  const [agreements, setAgreements] = useState<IAgreementProps[]>([
    {content: '이용 약관동의 (필수)', isAgree: false},
    {content: '개인정보 처리 방침 동의 (필수)', isAgree: false},
    {content: '마케팅 정보 수신 동의 (선택)', isAgree: false},
  ]);

  const {updateAllAgreement} = useHandleAgreement();

  const isAllSelected =
    agreements[0].isAgree && agreements[1].isAgree && agreements[2].isAgree;
  const canFinishSignup = agreements[0].isAgree && agreements[1].isAgree;

  const toggleAllAgreement = () => {
    setAllAgreement(!allAgreement);
    updateAllAgreement({
      agreements,
      allAgreement: isAllSelected ? true : false,
      setAgreements,
    });
  };

  const finishSignup = () => {
    bottomDrawerRef.current?.close();
    stackNavigation.navigate(stackScreens.SignupCompleteScreen);
  };

  return (
    <BottomSheet drawerRef={bottomDrawerRef} height={420 + bottom}>
      <View style={agreeBottomSheetStyles.container}>
        <View style={agreeBottomSheetStyles.wrap}>
          <SubTitleDescription
            text={`팝콘메이트를 이용하기 위해선\n약관동의가 필요합니다`}
            subTitle="필수는 반드시 체크하셔야 돼요"
          />
        </View>
        <View style={agreeBottomSheetStyles.allAgreeWrap}>
          <TextButtonContainer mb={8}>
            <SubTitle text="약관 전체동의" />
            <CheckBox
              state={isAllSelected ? 'indeterminate' : 'off'}
              onPress={toggleAllAgreement}
            />
          </TextButtonContainer>
        </View>
        <View style={agreeBottomSheetStyles.wrap}>
          <Divider mb={16} height={1} />
          <Agreement agreements={agreements} setAgreements={setAgreements} />
          <BoxButton onPress={finishSignup} disabled={!canFinishSignup}>
            동의하기
          </BoxButton>
        </View>
      </View>
    </BottomSheet>
  );
};

export default AgreeBottomSheet;
