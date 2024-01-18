import DefaultContainer from '@/components/container/defaultContainer';
import ButtonInput from '@/components/inputs/buttonInput';
import SubTitleDescription from '@/components/title/subTitleDescription';
import useGetVoteDateRange from '@/hooks/useGetVoteDateRange';
import {View} from 'react-native';

function WriteRecommandScreen() {
  const {startDate, endDate} = useGetVoteDateRange();
  return (
    <DefaultContainer>
      <SubTitleDescription
        text="다음 주의 팝콘작을 추천해 주세요"
        subTitle={`추천하신 영화는 ${startDate}부터\n${endDate}의 팝콘작 후보로 게시됩니다.`}
        mt={24}
        mb={32}
      />
      <ButtonInput
        value={''}
        placeholder="클릭하면 영화를 검색할 수 있어요"
        title="추천 영화"
        category="search"
        setValue={() => {}}
        essential
      />
    </DefaultContainer>
  );
}

export default WriteRecommandScreen;
