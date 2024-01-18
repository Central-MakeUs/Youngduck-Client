import CheckBox from '@/components/checkBox';
import DefaultContainer from '@/components/container/defaultContainer';
import ButtonInput from '@/components/inputs/buttonInput';
import TextArea from '@/components/inputs/textArea';
import SubTitleDescription from '@/components/title/subTitleDescription';
import useGetVoteDateRange from '@/hooks/useGetVoteDateRange';
import {useState} from 'react';
import {View} from 'react-native';
import writeRecommandScreenStyles from './WriteRecommandScreen.style';
import BoxButton from '@/components/buttons/boxButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function WriteRecommandScreen() {
  const {startDate, endDate} = useGetVoteDateRange();
  const [selectedMovie, setSelectedMovie] = useState<string>('');
  const [reason, setReason] = useState<string>('');
  const [isAgree, setIsAgree] = useState<boolean>(false);
  const {bottom} = useSafeAreaInsets();
  const styles = writeRecommandScreenStyles({bottom});
  const canRegister = !!selectedMovie.length && reason.length >= 10 && isAgree;

  const inputReason = (e: string) => setReason(e);

  const toggleIsAgreeState = () => setIsAgree(!isAgree);

  return (
    <DefaultContainer>
      <SubTitleDescription
        text="다음 주의 팝콘작을 추천해 주세요"
        subTitle={`추천하신 영화는 ${startDate}부터\n${endDate}의 팝콘작 후보로 게시됩니다.`}
        mt={24}
        mb={32}
      />
      <View style={styles.buttonMargin}>
        <ButtonInput
          value={selectedMovie}
          placeholder="클릭하면 영화를 검색할 수 있어요"
          title="추천 영화"
          category="search"
          setValue={setSelectedMovie}
          essential
        />
      </View>
      <TextArea
        value={reason}
        onChangeInput={inputReason}
        maxLength={100}
        placeholder={'최소 10자에서 최대 100자까지 입력할 수 있어요'}
        height={144}
        title="추천하는 이유"
        essential
      />
      <View style={styles.agreementWrap}>
        <SubTitleDescription
          text="게시글 정책을 확인했어요."
          subTitle="팝콘작 추천하기는 수정이나 삭제를 할 수 없어요."
        />
        <View style={styles.paddingCheckBox}>
          <CheckBox
            state={isAgree ? 'on' : 'off'}
            onPress={toggleIsAgreeState}
          />
        </View>
      </View>
      <View style={styles.registerButton}>
        <BoxButton disabled={!canRegister} onPress={() => {}}>
          등록하기
        </BoxButton>
      </View>
    </DefaultContainer>
  );
}

export default WriteRecommandScreen;
