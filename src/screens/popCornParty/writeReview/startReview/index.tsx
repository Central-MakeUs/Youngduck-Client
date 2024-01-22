import SelectButton from '@/components/buttons/selectButton';
import Typography from '@/components/typography';
import {View} from 'react-native';
import startReviewStyles from './StartReview.style';

interface IStartReviewProps {
  review: {[key: string]: string};
  setReview: React.Dispatch<React.SetStateAction<{[key: string]: string}>>;
}

const StartReview = ({review, setReview}: IStartReviewProps) => {
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
    <View>
      {questions.map(question => (
        <>
          <Typography style="Subtitle2" mb={8} key={question.question}>
            {question.question}
          </Typography>
          <View style={startReviewStyles.answersWrap}>
            {question.answers.map(answer => (
              <SelectButton
                onPress={() =>
                  setReview({...review, [question.category]: answer})
                }
                type={answer}
                isSelected={review[question.category] === answer}
                key={answer}
              />
            ))}
          </View>
        </>
      ))}
    </View>
  );
};

export default StartReview;
