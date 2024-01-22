import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {View} from 'react-native';
import popcornKeywordStyles from './PopcornKeyword.style';
import KeywordItem from '@/components/items/keywordItem';

const PopcornKeyword = () => {
  const popcornKeywords = [
    {keyword: '최고의 촬영', isPositive: true, count: 84},
    {keyword: '미술이 별로', isPositive: false, count: 47},
    {keyword: '심금을 울리는 OST', isPositive: true, count: 32},
  ];
  return (
    <>
      <Typography style="Subtitle2" color={palette.Another.Black} mb={8}>
        팝콘 키워드
      </Typography>
      <View style={popcornKeywordStyles.participateWrap}>
        <Typography style="Label2" color={palette.Another.Black}>
          120회
        </Typography>
        <Typography style="Body2" color={palette.Another.Black}>
          118명 참여
        </Typography>
      </View>
      {popcornKeywords.map(popcornKeyword => (
        <KeywordItem
          keyword={popcornKeyword.keyword}
          isPositive={popcornKeyword.isPositive}
          count={popcornKeyword.count}
          key={popcornKeyword.keyword}
        />
      ))}
    </>
  );
};

export default PopcornKeyword;
