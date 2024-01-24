import {ScrollView, View} from 'react-native';

import MultiButton from '@/components/buttons/multibutton';
import SubTitle from '@/components/title/subTitle';
import SelectButton from '@/components/buttons/selectButton';
import SelectItem from '@/components/items/selectItem';

import {ScreeningReviewStyle} from './ScreeningReview.style';

interface IFirstReviewProps {
  goNext: () => void;
  goPrevious: () => void;
}
const FirstReview = ({goNext, goPrevious}: IFirstReviewProps) => {
  const labels = ['기대만큼 좋았어요', '기대보다 아쉬웠어요'];
  const good = ['좋았어요', '아쉬웠어요'];
  return (
    <View style={ScreeningReviewStyle.container}>
      <ScrollView>
        <SubTitle
          mt={24}
          mb={9}
          text={`상영회 관람 후,\n 이 상영회의 만족도는 어땠나요?`}
        />
        <View style={{paddingLeft: 16}}>
          <View style={ScreeningReviewStyle.flex}>
            {labels.map(label => (
              <SelectButton
                size="small"
                key={label}
                type={label}
                onPress={() => {}}
                isSelected={false}
              />
            ))}
          </View>
        </View>

        <SubTitle text="좀 더 자세히 알려주세요" mt={15} />
        <View style={{paddingLeft: 16}}>
          <SelectItem
            text="작품에 대한 저의 느낌은"
            labels={good}
            onPress={() => {}}
            mt={8}
          />

          <SelectItem
            text="장소 선정은"
            labels={good}
            onPress={() => {}}
            mt={12}
          />

          <SelectItem
            text="운영 방식은"
            labels={good}
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
export default FirstReview;
