import {ScrollView, View} from 'react-native';

import SubTitleDescription from '@/components/title/subTitleDescription';
import DefaultContainer from '@/components/container/defaultContainer';
import TextArea from '@/components/inputs/textArea';
import AgreeNoticeCard from '@/components/cards/agreeNoticeCard';
import BoxButton from '@/components/buttons/boxButton';
import {IScreeningReviewBodyRequest} from '@/models/screening/request/reviewRequestDto';

import {screeningReviewStyle} from '../ScreeningReview.style';
import useScreeningMutation from '@/hooks/mutaions/useScreeningMutation';

interface IEndReviewProps {
  setValue: (value: boolean | string, option: string) => void;
  value: IScreeningReviewBodyRequest;
  id: number;
}

const EndReview = ({setValue, value, id}: IEndReviewProps) => {
  const {uploadScreeningReview} = useScreeningMutation();
  const handleChangeAgree = () => {
    setValue(!value.hasAgreed, 'hasAgreed');
  };

  const handleReviewComplete = async () => {
    const body = {...value, id};
    console.log(body);
    await uploadScreeningReview.mutateAsync(body);
  };
  return (
    <ScrollView style={screeningReviewStyle.container}>
      <DefaultContainer>
        <SubTitleDescription
          mt={24}
          text={`상영회에 대한 \n간단한 후기를 작성해주세요`}
          subTitle="한줄이어도 괜찮아요."
          mb={8}
        />
        <TextArea
          value={value.review}
          onChangeInput={text => setValue(text, 'review')}
          maxLength={300}
          height={216}
        />
        <View style={screeningReviewStyle.notice}>
          <AgreeNoticeCard
            value={value.hasAgreed}
            content="작성한 리뷰는 삭제 및 수정할 수 없어요."
            onChangeValue={handleChangeAgree}
          />
        </View>
        <View style={screeningReviewStyle.multi}>
          <BoxButton disabled={!value.hasAgreed} onPress={handleReviewComplete}>
            리뷰 작성하기
          </BoxButton>
        </View>
      </DefaultContainer>
    </ScrollView>
  );
};
export default EndReview;
