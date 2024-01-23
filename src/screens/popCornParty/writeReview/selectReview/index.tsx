import SelectButton from '@/components/buttons/selectButton';
import SubTitleDescription from '@/components/title/subTitleDescription';
import Typography from '@/components/typography';
import {ScrollView, View} from 'react-native';
import selectReviewStyles from './SelectReview.style';
import MultiButton from '@/components/buttons/multibutton';
import getQuestions from '@/utils/getQuestions';

interface ISelectReviewProps {
  review: {[key: string]: string};
  setReview: React.Dispatch<React.SetStateAction<{[key: string]: string}>>;
  isSelectedPositive: boolean;
  screenNumber: number;
  onLeftButtonPress: () => void;
  onRightButtonPress: () => void;
  disabled: boolean;
}

const SelectReview = ({
  review,
  setReview,
  isSelectedPositive,
  screenNumber,
  onLeftButtonPress,
  onRightButtonPress,
}: ISelectReviewProps) => {
  const questions = getQuestions({isSelectedPositive});
  return (
    <ScrollView>
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
                      [question.category]: answer,
                    })
                  }
                  type={answer}
                  isSelected={review[question.category] === answer}
                  key={answer}
                />
              ))}
            </View>
          </View>
        ))}
      </View>
      <View style={{paddingBottom: 40}}>
        <MultiButton
          leftButtonText="이전"
          rightButtonText="다음"
          onLeftButtonPress={onLeftButtonPress}
          onRightButtonPress={onRightButtonPress}
        />
      </View>
    </ScrollView>
  );
};

export default SelectReview;
