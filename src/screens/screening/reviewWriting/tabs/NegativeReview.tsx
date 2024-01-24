import {View, ScrollView} from 'react-native';

import SelectItem from '@/components/items/selectItem';
import MultiButton from '@/components/buttons/multibutton';

import {ScreeningReviewStyle} from './ScreeningReview.style';
import SubTitleDescription from '@/components/title/subTitleDescription';

interface INegativeReviewProps {
  goNext: () => void;
  goPrevious: () => void;
}

const NegativeReview = ({goNext, goPrevious}: INegativeReviewProps) => {
  const direct = ['애매한 연출', '화면이 잘 안 붙네', '정돈 안 된 앵글'];
  const art = ['아쉬운 디테일', '칙칙한 색감', '어색한 복장'];
  const music = ['음악이 별로', '음향이 별로'];
  const content = [
    '의문의 결말',
    '힘빠지는 후반부',
    '회수 안 된 떡밥',
    '공감 불가 주제의식',
  ];
  const actor = ['눈물나는 연기력', '미스 캐스팅'];
  return (
    <View style={ScreeningReviewStyle.container}>
      <ScrollView>
        <View style={{paddingLeft: 16}}>
          <SubTitleDescription
            mt={24}
            text="작품에서 아쉬웠던 점을 알려 주세요"
            subTitle="모든 카테고리에서 선택하지 않아도 돼요."
          />

          <SelectItem
            text="연출이 아쉬워요"
            labels={direct}
            onPress={() => {}}
            mt={16}
          />

          <SelectItem
            text="미술이 아쉬워요"
            labels={art}
            onPress={() => {}}
            mt={12}
          />

          <SelectItem
            text="음악이 아쉬워요"
            labels={music}
            onPress={() => {}}
            mt={12}
          />

          <SelectItem
            text="내용이 아쉬워요"
            labels={content}
            onPress={() => {}}
            mt={12}
          />

          <SelectItem
            text="배우가 아쉬워요"
            labels={actor}
            onPress={() => {}}
            mt={12}
            mb={28}
          />
        </View>
        <View style={{height: 88, marginBottom: 40}}>
          <MultiButton
            leftButtonText="이전"
            rightButtonText="다음"
            onLeftButtonPress={goPrevious}
            onRightButtonPress={goNext}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default NegativeReview;
