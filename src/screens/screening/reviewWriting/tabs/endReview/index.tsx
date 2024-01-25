import {ScrollView, View} from 'react-native';

import SubTitleDescription from '@/components/title/subTitleDescription';
import DefaultContainer from '@/components/container/defaultContainer';
import TextArea from '@/components/inputs/textArea';
import AgreeNoticeCard from '@/components/cards/agreeNoticeCard';
import BoxButton from '@/components/buttons/boxButton';

import {screeningReviewStyle} from '../ScreeningReview.style';

interface IEndReviewProps {
  setValue: (value: boolean | string, option: string) => void;
  value: any; // TODO: 타입 생성
}

const EndReview = ({setValue, value}: IEndReviewProps) => {
  const handleChangeAgree = () => {
    setValue(!value.hasAgreed, 'hasAgreed');
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
          <BoxButton
            disabled={!value.hasAgreed}
            onPress={() => {
              //console.log(value);
              //TODO: 백엔드 api 연결
            }}>
            리뷰 작성하기
          </BoxButton>
        </View>
      </DefaultContainer>
    </ScrollView>
  );
};
export default EndReview;
