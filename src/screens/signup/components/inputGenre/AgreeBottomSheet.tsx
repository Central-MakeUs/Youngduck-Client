import BottomSheet from '@/components/bottomSheet';
import DefaultContainer from '@/components/container/defaultContainer';
import SubTitleDescription from '@/components/title/subTitleDescription';
import TextButtonContainer from './TextButtonContainer';
import SubTitle from '@/components/title/subTitle';
import CheckBox from '@/components/checkBox';
import Divider from '@/components/divider';
import AgreeTerms from './AgreeTerms';
import BoxButton from '@/components/buttons/boxButton';
import {BottomDrawerMethods} from 'react-native-animated-bottom-drawer';
import {getScreenSize} from '@/utils/getScreenSize';
import {GenreTypes} from '@/types/genre';
import {useAgreeTermStore} from '@/stores/agreeTermStore';
import useNavigator from '@/hooks/useNavigator';

interface IAgreeBottomSheetProps {
  bottomDrawerRef: React.RefObject<BottomDrawerMethods>;
  selectedGenres: GenreTypes[];
}

const AgreeBottomSheet = ({bottomDrawerRef}: IAgreeBottomSheetProps) => {
  const {screenHeight} = getScreenSize();
  const {allAgree, isFinishAgree, setAllAgree} = useAgreeTermStore();
  const {stackNavigation} = useNavigator();

  return (
    <BottomSheet drawerRef={bottomDrawerRef} height={(screenHeight * 2) / 3}>
      <DefaultContainer>
        <SubTitleDescription
          text={`팝콘메이트를 이용하기 위해선\n약관동의가 필요합니다`}
          subTitle="필수는 반드시 체크하셔야 돼요"
        />
        <TextButtonContainer mb={8}>
          <SubTitle text="약관 전체동의" />
          <CheckBox
            state={allAgree ? 'indeterminate' : 'off'}
            onPress={() => setAllAgree(!allAgree)}
          />
        </TextButtonContainer>
        <Divider mb={16} />
        <AgreeTerms />
        <BoxButton
          onPress={() => {
            bottomDrawerRef.current?.close();
            stackNavigation.navigate('SignupCompleteScreen');
          }}
          disabled={!isFinishAgree}>
          동의하기
        </BoxButton>
      </DefaultContainer>
    </BottomSheet>
  );
};

export default AgreeBottomSheet;
