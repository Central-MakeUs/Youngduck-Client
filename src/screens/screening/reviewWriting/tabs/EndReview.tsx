import {useState} from 'react';
import {ScrollView, View} from 'react-native';

import SubTitleDescription from '@/components/title/subTitleDescription';
import DefaultContainer from '@/components/container/defaultContainer';
import TextArea from '@/components/inputs/textArea';
import AgreeNoticeCard from '@/components/cards/agreeNoticeCard';
import BoxButton from '@/components/buttons/boxButton';

import {ScreeningReviewStyle} from './ScreeningReview.style';

interface IEndReviewProps {}

const EndReview = ({}: IEndReviewProps) => {
  const [description, setDescription] = useState('');
  const [agree, setAgree] = useState(false);
  const handleChangeAgree = () => {
    setAgree(!agree);
  };
  return (
    <ScrollView style={ScreeningReviewStyle.container}>
      <DefaultContainer>
        <SubTitleDescription
          mt={24}
          text={`상영회에 대한 \n간단한 후기를 작성해주세요`}
          subTitle="한줄이어도 괜찮아요."
          mb={8}
        />
        <TextArea
          value={description}
          onChangeInput={text => setDescription(text)}
          maxLength={300}
          height={216}
        />
        <View style={{marginTop: 16, marginBottom: 40}}>
          <AgreeNoticeCard
            value={agree}
            content="작성한 리뷰는 삭제 및 수정할 수 없어요."
            onChangeValue={handleChangeAgree}
          />
        </View>
        <View style={{height: 88, marginBottom: 40}}>
          <BoxButton onPress={() => {}}>리뷰 작성하기</BoxButton>
        </View>
      </DefaultContainer>
    </ScrollView>
  );
};
export default EndReview;
