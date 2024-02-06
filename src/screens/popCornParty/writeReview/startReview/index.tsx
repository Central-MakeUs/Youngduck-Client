import SelectButton from '@/components/buttons/selectButton';
import Typography from '@/components/typography';
import {View} from 'react-native';
import startReviewStyles from './StartReview.style';

interface IStartReviewProps {
  startReview: {[key: string]: boolean | undefined};
  setStartReview: React.Dispatch<
    React.SetStateAction<{[key: string]: boolean | undefined}>
  >;
  notWatched: boolean;
}

const StartReview = ({
  startReview,
  setStartReview,
  notWatched,
}: IStartReviewProps) => {
  const questionList = [
    {
      category: 'hasWatched',
      question: '영화는 관람하셨나요?',
      answers: ['네, 봤어요!', '아니오, 아직이에요.'],
    },
    {
      category: 'beforeScreening',
      question: `영화 관람 전,\n이 영화의 기대지수는 어땠나요?`,
      answers: ['재미있을 것 같았어요.', '큰 기대가 있지는 않았어요.'],
    },
    {
      category: 'afterScreening',
      question: `영화 관람 후,\n이 영화의 만족도는 어땠나요?`,
      answers: ['기대만큼 좋았어요.', '기대보다 아쉬웠어요.'],
    },
  ];
  const questions = notWatched ? [questionList[0]] : questionList;
  const selectButton = (category: string, index: number) => {
    if (
      (startReview[category] === true && index === 0) ||
      (startReview[category] === false && index === 1)
    ) {
      return true;
    }
  };
  return (
    <View style={startReviewStyles.container}>
      {questions.map(question => (
        <View key={`${question.question}-container`}>
          <Typography style="Subtitle2" mb={8} key={question.question}>
            {question.question}
          </Typography>
          <View
            style={startReviewStyles.answersWrap}
            key={`${question.question}-answer-wrap`}>
            {question.answers.map((answer, index) => (
              <SelectButton
                onPress={() =>
                  setStartReview({
                    ...startReview,
                    [question.category]: index === 0 ? true : false,
                  })
                }
                type={answer}
                isSelected={selectButton(question.category, index)!}
                key={answer}
              />
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};

export default StartReview;
