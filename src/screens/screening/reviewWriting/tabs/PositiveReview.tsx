import {ScrollView, View} from 'react-native';

import MultiButton from '@/components/buttons/multibutton';
import SubTitleDescription from '@/components/title/subTitleDescription';
import SelectItem from '@/components/items/selectItem';

import {ScreeningReviewStyle} from './ScreeningReview.style';

interface IPositiveReviewProps {
  goNext: () => void;
  goPrevious: () => void;
}

const PositiveReview = ({goNext, goPrevious}: IPositiveReviewProps) => {
  const direct = [
    '씨네마스터의 연출',
    '최고의 촬영',
    '폼 미친 편집',
    '애니메이션 - 작화의 힘',
  ];
  const art = ['영화미술의 교과서', '세트가 아트다', '의상이 날개옷'];
  const music = ['가슴뛰는 음악', '영혼을 울리는 OST'];
  const content = [
    '신이 쓴 각본',
    '의미있는 주제',
    '말맛 좋은 대사',
    '확실한 기승전결',
  ];
  const actor = ['찰떡같은 캐스팅', '연기력 폭발', '케미 맛집'];
  return (
    <View style={ScreeningReviewStyle.container}>
      <ScrollView>
        <View style={{paddingLeft: 16}}>
          <SubTitleDescription
            mt={24}
            text="작품에서 좋았던 점을 알려 주세요"
            subTitle="모든 카테고리에서 선택하지 않아도 돼요."
          />

          <SelectItem
            text="연출이 좋았어요"
            labels={direct}
            onPress={() => {}}
            mt={16}
          />

          <SelectItem
            text="미술이 좋았어요"
            labels={art}
            onPress={() => {}}
            mt={12}
          />

          <SelectItem
            text="음악이 좋았어요"
            labels={music}
            onPress={() => {}}
            mt={12}
          />

          <SelectItem
            text="내용이 좋았어요"
            labels={content}
            onPress={() => {}}
            mt={12}
          />

          <SelectItem
            text="배우가 좋았어요"
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
export default PositiveReview;
