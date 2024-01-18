import DefaultContainer from '@/components/container/defaultContainer';
import SubTitleDescription from '@/components/title/subTitleDescription';
import useGetVoteDateRange from '@/hooks/useGetVoteDateRange';

function WriteRecommandScreen() {
  const {startDate, endDate} = useGetVoteDateRange();
  return (
    <DefaultContainer>
      <SubTitleDescription
        text="다음 주의 팝콘작을 추천해 주세요"
        subTitle={`추천하신 영화는 ${startDate}부터\n${endDate}의 팝콘작 후보로 게시됩니다.`}
      />
    </DefaultContainer>
  );
}

export default WriteRecommandScreen;
