import {View, ScrollView} from 'react-native';

import SelectItem from '@/components/items/selectItem';
import MultiButton from '@/components/buttons/multibutton';

import {ScreeningReviewStyle} from './ScreeningReview.style';
import SubTitleDescription from '@/components/title/subTitleDescription';
import {negativeReview, reviewTypes} from '@/constants/review';

interface INegativeReviewProps {
  goNext: () => void;
  goPrevious: () => void;
  setValue: (value: boolean, option: string) => void;
  review: any;
}

const NegativeReview = ({
  goNext,
  goPrevious,
  setValue,
  review,
}: INegativeReviewProps) => {
  return (
    <View style={ScreeningReviewStyle.container}>
      <ScrollView>
        <View style={{paddingLeft: 16}}>
          <SubTitleDescription
            mt={24}
            text="작품에서 아쉬웠던 점을 알려 주세요"
            subTitle="모든 카테고리에서 선택하지 않아도 돼요."
          />

          {reviewTypes.map((t, index) => (
            <SelectItem
              key={t}
              text={negativeReview[t].title}
              labels={negativeReview[t].select}
              setValue={(value, option) => setValue(value, option)}
              value={review}
              mt={index === 0 ? 16 : 12}
              mb={index === reviewTypes.length - 1 ? 28 : undefined}
            />
          ))}
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
