import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import MultiButton from '@/components/buttons/multibutton';
import SubTitleDescription from '@/components/title/subTitleDescription';
import SelectMultipleButtons from '@/components/buttonGroups/selectMultipleButtons';
import DefaultScrollContainer from '@/components/container/defaultScrollContainer';
import {reviewTypes} from '@/constants/review';
import {getReview} from '@/utils/getReview';
import {
  TScreeningNegativeReview,
  TScreeningPositiveReview,
} from '@/models/enums/review';

import {screeningReviewStyle} from '../ScreeningReview.style';

interface ISelectReviewProps {
  goNext: () => void;
  goPrevious: () => void;
  setValue: (value: boolean, option: string) => void;
  review: TScreeningPositiveReview<boolean> | TScreeningNegativeReview<boolean>;
  type: 'positive' | 'negative';
}

const SelectReview = ({
  goNext,
  goPrevious,
  setValue,
  review,
  type,
}: ISelectReviewProps) => {
  const reviewData = getReview('screening', type);

  if (!reviewData) {
    return null;
  }

  const {bottom} = useSafeAreaInsets();

  const style = screeningReviewStyle({bottom});

  return (
    <View style={style.container}>
      <DefaultScrollContainer>
        <View style={{paddingLeft: 16}}>
          <SubTitleDescription
            mt={24}
            text={`작품에서 ${
              type === 'positive' ? '좋았던 점' : '아쉬웠던 점'
            }을 알려 주세요`}
            subTitle="모든 카테고리에서 선택하지 않아도 돼요."
          />

          {reviewTypes.map((t, index) => (
            <SelectMultipleButtons
              key={t}
              text={reviewData[t].title}
              labels={reviewData[t].select}
              setValue={(value, option) => setValue(value, option)}
              value={review}
              mt={index === 0 ? 16 : 12}
              mb={index === reviewTypes.length - 1 ? 28 : undefined}
            />
          ))}
        </View>
      </DefaultScrollContainer>
      <View style={style.bottom}>
        <MultiButton
          leftButtonText="이전"
          rightButtonText="다음"
          onLeftButtonPress={goPrevious}
          onRightButtonPress={goNext}
        />
      </View>
    </View>
  );
};
export default SelectReview;
