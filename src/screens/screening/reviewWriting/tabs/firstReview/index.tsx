import {ScrollView, View} from 'react-native';

import MultiButton from '@/components/buttons/multibutton';
import SubTitle from '@/components/title/subTitle';
import SelectButton from '@/components/buttons/selectButton';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {screeningReviewStyle} from '../ScreeningReview.style';

interface IFirstReviewProps {
  goNext: () => void;
  goPrevious: () => void;
  setValue: (value: boolean, option: string) => void;
  review: any; // TODO: 백엔드 api 타입
}
const FirstReview = ({
  goNext,
  goPrevious,
  setValue,
  review,
}: IFirstReviewProps) => {
  const labels = ['기대만큼 좋았어요', '기대보다 아쉬웠어요'];
  const reaction = ['좋았어요', '아쉬웠어요'];

  return (
    <View style={screeningReviewStyle.container}>
      <ScrollView>
        <SubTitle
          mt={24}
          mb={9}
          text={`상영회 관람 후,\n 이 상영회의 만족도는 어땠나요?`}
        />
        <View style={screeningReviewStyle.padding}>
          <View style={screeningReviewStyle.flex}>
            {labels.map((label, index) => (
              <SelectButton
                size="small"
                key={label}
                type={label}
                onPress={() => {
                  if (review.afterScreening === undefined) {
                    setValue(index === 0 ? true : false, 'afterScreening');
                  } else {
                    setValue(!review.afterScreening, 'afterScreening');
                  }
                }}
                isSelected={
                  review.afterScreening !== undefined
                    ? index === 0
                      ? review.afterScreening
                      : !review.afterScreening
                    : false
                }
              />
            ))}
          </View>
        </View>

        <SubTitle text="좀 더 자세히 알려주세요" mt={15} />
        <View style={screeningReviewStyle.padding}>
          <Typography mb={8} style="Body2" color={palette.Another.Black}>
            작품에 대한 저의 느낌은
          </Typography>
          <View style={screeningReviewStyle.flex}>
            {reaction.map((label, index) => (
              <SelectButton
                size="small"
                key={label}
                type={label}
                onPress={() => {
                  if (review.screeningReview === undefined) {
                    setValue(index === 0 ? true : false, 'screeningReview');
                  } else {
                    setValue(!review.screeningReview, 'screeningReview');
                  }
                }}
                isSelected={
                  review.screeningReview !== undefined
                    ? index === 0
                      ? review.screeningReview
                      : !review.screeningReview
                    : false
                }
              />
            ))}
          </View>

          <Typography mb={8} style="Body2" color={palette.Another.Black}>
            장소 선정은
          </Typography>
          <View style={screeningReviewStyle.flex}>
            {reaction.map((label, index) => (
              <SelectButton
                size="small"
                key={label}
                type={label}
                onPress={() => {
                  if (review.locationReview === undefined) {
                    setValue(index === 0 ? true : false, 'locationReview');
                  } else {
                    setValue(!review.locationReview, 'locationReview');
                  }
                }}
                isSelected={
                  review.locationReview !== undefined
                    ? index === 0
                      ? review.locationReview
                      : !review.locationReview
                    : false
                }
              />
            ))}
          </View>

          <Typography mb={8} style="Body2" color={palette.Another.Black}>
            운영 방식은
          </Typography>
          <View style={screeningReviewStyle.flex}>
            {reaction.map((label, index) => (
              <SelectButton
                size="small"
                key={label}
                type={label}
                onPress={() => {
                  if (review.serviceReview === undefined) {
                    setValue(index === 0 ? true : false, 'serviceReview');
                  } else {
                    setValue(!review.serviceReview, 'serviceReview');
                  }
                }}
                isSelected={
                  review.serviceReview !== undefined
                    ? index === 0
                      ? review.serviceReview
                      : !review.serviceReview
                    : false
                }
              />
            ))}
          </View>
        </View>
        <View style={screeningReviewStyle.bottom}>
          <MultiButton
            leftButtonText="이전"
            rightButtonText="다음"
            onLeftButtonPress={goPrevious}
            onRightButtonPress={goNext}
            disabled={
              review.afterScreening == undefined ||
              review.serviceReview === undefined ||
              review.locationReview === undefined ||
              review.screeningReview === undefined ||
              review.afterScreening === undefined
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default FirstReview;
