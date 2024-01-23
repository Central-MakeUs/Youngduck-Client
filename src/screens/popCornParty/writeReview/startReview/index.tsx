import SelectButton from '@/components/buttons/selectButton';
import Typography from '@/components/typography';
import {View} from 'react-native';
import startReviewStyles from './StartReview.style';

interface IStartReviewProps {
  startReview: {[key: string]: string};
  setStartReview: React.Dispatch<React.SetStateAction<{[key: string]: string}>>;
}

const StartReview = ({startReview, setStartReview}: IStartReviewProps) => {
  const questions = [
    {
      category: 'isWatched',
      question: '영화는 관람하셨나요?',
      answers: ['네, 봤어요!', '아니오, 아직이에요.'],
    },
    {
      category: 'expectation',
      question: `영화 관람 전,\n이 영화의 기대지수는 어땠나요?`,
      answers: ['재미있을 것 같았어요.', '큰 기대가 있지는 않았어요.'],
    },
    {
      category: 'satisfaction',
      question: `영화 관람 후,\n이 영화의 만족도는 어땠나요?`,
      answers: ['기대만큼 좋았어요.', '기대보다 아쉬웠어요.'],
    },
  ];
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
            {question.answers.map(answer => (
              <SelectButton
                onPress={() =>
                  setStartReview({...startReview, [question.category]: answer})
                }
                type={answer}
                isSelected={startReview[question.category] === answer}
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
