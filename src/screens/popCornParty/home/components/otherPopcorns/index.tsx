import BoxButton from '@/components/buttons/boxButton';
import DefaultContainer from '@/components/container/defaultContainer';

const OtherPopcorns = () => {
  return (
    <DefaultContainer>
      <BoxButton onPress={() => {}} variant="default" mt={12} mb={8}>
        5건의 투표작 모두 보기
      </BoxButton>
      <BoxButton onPress={() => {}} mb={32}>
        다른 작품 추천하기
      </BoxButton>
    </DefaultContainer>
  );
};

export default OtherPopcorns;
