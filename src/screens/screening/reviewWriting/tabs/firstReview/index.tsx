import {View} from 'react-native';

import MultiButton from '@/components/buttons/multibutton';
import SubTitle from '@/components/title/subTitle';
import SelectTwoButton from '@/components/buttonGroups/selectTwoButtons';
import {labels, reaction, reviewOptions} from '@/constants/review';

import {screeningReviewStyle} from '../ScreeningReview.style';
import {IScreeningReviewBodyRequest} from '@/models/screening/request/reviewRequestDto';
import DefaultScrollContainer from '@/components/container/defaultScrollContainer';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface IFirstReviewProps {
  goNext: () => void;
  goPrevious: () => void;
  setValue: (value: boolean, option: string) => void;
  review: IScreeningReviewBodyRequest;
}
const FirstReview = ({
  goNext,
  goPrevious,
  setValue,
  review,
}: IFirstReviewProps) => {
  const canGoNext =
    review.afterScreening !== undefined &&
    review.serviceReview !== undefined &&
    review.locationReview !== undefined &&
    review.screeningReview !== undefined &&
    review.afterScreening !== undefined;

  const {bottom} = useSafeAreaInsets();

  const style = screeningReviewStyle({bottom});

  return (
    <View style={style.container}>
      <DefaultScrollContainer>
        <SelectTwoButton
          title={`상영회 관람 후,\n 이 상영회의 만족도는 어땠나요?`}
          labels={labels}
          value={review.afterScreening}
          setValue={setValue}
          option="afterScreening"
          mt={24}
        />

        <SubTitle text="좀 더 자세히 알려주세요" mt={27} mb={8} />

        {reviewOptions.map((reviews, index) => (
          <SelectTwoButton
            key={index}
            subtitle={reviews.subtitle}
            labels={reaction}
            value={review[reviews.option]}
            setValue={setValue}
            option={reviews.option}
            mt={index === 0 ? undefined : 12}
          />
        ))}
      </DefaultScrollContainer>
      <View style={style.bottom}>
        <MultiButton
          leftButtonText="이전"
          rightButtonText="다음"
          onLeftButtonPress={goPrevious}
          onRightButtonPress={goNext}
          disabled={!canGoNext}
        />
      </View>
    </View>
  );
};
export default FirstReview;
