import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {View} from 'react-native';
import popcornKeywordStyles from './PopcornKeyword.style';
import KeywordItem from '@/components/items/keywordItem';
import {getKeyword} from '@/utils/getKeyword';

interface IPopcornKeyword {
  participatedCount: number;
  participatedUserCount: number;
  topThreeKeywords: {[key: string]: number}[];
}

const PopcornKeyword = ({
  participatedCount,
  participatedUserCount,
  topThreeKeywords,
}: IPopcornKeyword) => {
  const {positiveKeywords, negativeKeywords} = getKeyword;
  const convertKeyToValue = (topThreeKeyword: Object) =>
    positiveKeywords[Object.keys(topThreeKeyword)[0]] ||
    negativeKeywords[Object.keys(topThreeKeyword)[0]];

  const isPositive = (topThreeKeyword: Object) =>
    positiveKeywords[Object.keys(topThreeKeyword)[0]] !== undefined;
  return (
    <>
      <Typography style="Subtitle2" color={palette.Another.Black} mb={8}>
        팝콘 키워드
      </Typography>
      <View style={popcornKeywordStyles.participateWrap}>
        <Typography style="Label2" color={palette.Another.Black}>
          {`${participatedCount}회`}
        </Typography>
        <Typography style="Body2" color={palette.Another.Black}>
          {`${participatedUserCount}명 참여`}
        </Typography>
      </View>
      {topThreeKeywords.map(topThreeKeyword => (
        <KeywordItem
          keyword={convertKeyToValue(topThreeKeyword)}
          isPositive={isPositive(topThreeKeyword)}
          totalCount={participatedCount}
          count={Object.values(topThreeKeyword)[0]}
          key={Object.keys(topThreeKeyword)[0]}
        />
      ))}
    </>
  );
};

export default PopcornKeyword;
