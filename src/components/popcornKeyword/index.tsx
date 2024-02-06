import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import KeywordItem from '@/components/items/keywordItem';
import {getKeyword} from '@/utils/getKeyword';
import Loading from '../loading';
import {View} from 'react-native';
import popcornKeywordStyles from './PopcornKeyword.style';
import EmptyItem from '../items/emptyItem';

interface IPopcornKeyword {
  participatedCount: number;
  topThreeKeywords: {[key: string]: number}[];
}

const PopcornKeyword = ({
  participatedCount,
  topThreeKeywords,
}: IPopcornKeyword) => {
  const {positiveKeywords, negativeKeywords} = getKeyword;
  const convertKeyToValue = (topThreeKeyword: Object) =>
    positiveKeywords[Object.keys(topThreeKeyword)[0]] ||
    negativeKeywords[Object.keys(topThreeKeyword)[0]];

  const isPositive = (topThreeKeyword: Object) =>
    positiveKeywords[Object.keys(topThreeKeyword)[0]] !== undefined;
  return (
    <View style={popcornKeywordStyles.container}>
      <Typography style="Subtitle2" color={palette.Another.Black} mb={8}>
        팝콘 키워드
      </Typography>

      {topThreeKeywords === undefined && <Loading />}
      {topThreeKeywords.length === 0 && <EmptyItem text="아직 리뷰가 없어요" />}
      {topThreeKeywords.length > 0 &&
        topThreeKeywords.map(topThreeKeyword => (
          <KeywordItem
            keyword={convertKeyToValue(topThreeKeyword)}
            isPositive={isPositive(topThreeKeyword)}
            totalCount={participatedCount}
            count={Object.values(topThreeKeyword)[0]}
            key={Object.keys(topThreeKeyword)[0]}
          />
        ))}
    </View>
  );
};

export default PopcornKeyword;
