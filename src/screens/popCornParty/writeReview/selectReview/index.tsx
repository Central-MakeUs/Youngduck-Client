import SelectButton from '@/components/buttons/selectButton';
import SubTitleDescription from '@/components/title/subTitleDescription';
import Typography from '@/components/typography';
import {View} from 'react-native';
import selectReviewStyles from './SelectReview.style';
import MultiButton from '@/components/buttons/multibutton';
import getQuestions from '@/utils/getQuestions';
import DefaultScrollContainer from '@/components/container/defaultScrollContainer';

interface ISelectReviewProps {
  review: {[key: string]: boolean};
  setReview: React.Dispatch<React.SetStateAction<{[key: string]: boolean}>>;
  isSelectedPositive: boolean;
  screenNumber: number;
  onLeftButtonPress: () => void;
  onRightButtonPress: () => void;
  disabled?: boolean;
}

const SelectReview = ({
  review,
  setReview,
  isSelectedPositive,
  screenNumber,
  onLeftButtonPress,
  onRightButtonPress,
  disabled = false,
}: ISelectReviewProps) => {
  const questions = getQuestions({isSelectedPositive});
  return (
    <>
      <DefaultScrollContainer>
        <SubTitleDescription
          text={
            screenNumber === 1
              ? `어떤 점이 ${isSelectedPositive ? '좋았나요?' : '아쉬웠나요?'}`
              : `${isSelectedPositive ? '좋은 점' : '아쉬운 점'}도 있으셨나요?`
          }
          subTitle={
            screenNumber === 1
              ? '모든 카테고리에서 선택하지 않아도 돼요.'
              : '없다면 [다음]을 눌러주세요.'
          }
        />
        <View>
          {questions.map(question => (
            <View key={`${question.subject}-container`}>
              <Typography style="Body2" mb={8} key={question.subject}>
                {question.subject}
              </Typography>
              <View
                style={selectReviewStyles.answersWrap}
                key={`${question.subject}-answer-wrap`}>
                {question.answers.map(answer => (
                  <SelectButton
                    onPress={() =>
                      setReview({
                        ...review,
                        [answer.value]: !review[answer.value],
                      })
                    }
                    type={answer.category}
                    isSelected={review[answer.value]}
                    key={answer.category}
                  />
                ))}
              </View>
            </View>
          ))}
        </View>
      </DefaultScrollContainer>
      <View style={{paddingBottom: 40}}>
        <MultiButton
          leftButtonText="이전"
          rightButtonText="다음"
          onLeftButtonPress={onLeftButtonPress}
          onRightButtonPress={onRightButtonPress}
          disabled={disabled}
        />
      </View>
    </>
  );
};

export default SelectReview;
