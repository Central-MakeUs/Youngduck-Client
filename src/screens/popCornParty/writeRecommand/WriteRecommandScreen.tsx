import {useState} from 'react';
import {Keyboard, Pressable, View} from 'react-native';

import CheckBox from '@/components/checkBox';
import ButtonInput from '@/components/inputs/buttonInput';
import TextArea from '@/components/inputs/textArea';
import SubTitleDescription from '@/components/title/subTitleDescription';
import Popup from '@/components/popup';
import {getVoteDateRange} from '@/utils/getDate';

import writeRecommandScreenStyles from './WriteRecommandScreen.style';
import {IRecommendMovieProps} from '@/types/popcornParty';
import usePopcornPartyMutation from '@/hooks/mutaions/usePopcornPartyMutation';
import DefaultScrollContainer from '@/components/container/defaultScrollContainer';
import BottomBoxButton from '@/components/bottomButton/bottomBoxButton';
import DismissKeyboardView from '@/components/dismissKeyboardView';
import useText from '@/hooks/useText';

function WriteRecommandScreen() {
  const [selectedMovie, setSelectedMovie] = useState<IRecommendMovieProps>({
    title: '',
    movieId: 'K',
    movieSeq: '',
  });
  const [isAgree, setIsAgree] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    text: reason,
    updateText: setReason,
    isValid: reasonIsValid,
  } = useText((value: string) => {
    return value.length >= 10;
  });

  const {startDate, endDate} = getVoteDateRange();

  const {recommendMovieMutate} = usePopcornPartyMutation();

  const canRegister =
    !!selectedMovie.title.length && reason.length >= 10 && isAgree;

  const inputReason = (e: string) => setReason(e);

  const toggleIsAgreeState = () => setIsAgree(!isAgree);
  const toggleIsVisibleState = () => setIsVisible(!isVisible);

  const goToRecommandListScreen = () => {
    setIsLoading(true);
    recommendMovieMutate({
      movieId: selectedMovie.movieSeq,
      movieType: selectedMovie.movieId,
      reason,
      agreed: isAgree,
    });
  };

  return (
    <>
      <DismissKeyboardView>
        <Popup
          title="등록하시겠습니까?"
          content="등록 후에는 수정할 수 없어요"
          isVisible={isVisible}
          onClose={toggleIsVisibleState}
          onPress={goToRecommandListScreen}
        />
        <DefaultScrollContainer>
          <Pressable
            style={writeRecommandScreenStyles.container}
            onPress={Keyboard.dismiss}>
            <SubTitleDescription
              text="다음 주의 팝콘작을 추천해 주세요"
              subTitle={`추천하신 영화는 ${startDate}부터\n${endDate}의 팝콘작 후보로 게시됩니다.`}
              mt={24}
              mb={32}
            />
            <View style={writeRecommandScreenStyles.buttonMargin}>
              <ButtonInput
                value={selectedMovie.title}
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
              errorContent={
                !reasonIsValid ? '추천하는 이유 10자 이상 적어주세요' : ''
              }
              essential
            />
            <View style={writeRecommandScreenStyles.agreementWrap}>
              <SubTitleDescription
                text="게시글 정책을 확인했어요."
                subTitle="팝콘작 추천하기는 수정이나 삭제를 할 수 없어요."
              />
              <View style={writeRecommandScreenStyles.paddingCheckBox}>
                <CheckBox
                  state={isAgree ? 'on' : 'off'}
                  onPress={toggleIsAgreeState}
                />
              </View>
            </View>
          </Pressable>
        </DefaultScrollContainer>
      </DismissKeyboardView>
      <BottomBoxButton
        onPress={toggleIsVisibleState}
        disabled={!canRegister || isLoading}>
        {isLoading ? '로딩 중' : '등록하기'}
      </BottomBoxButton>
    </>
  );
}

export default WriteRecommandScreen;
