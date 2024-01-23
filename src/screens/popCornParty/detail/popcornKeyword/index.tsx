import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {View} from 'react-native';
import popcornKeywordStyles from './PopcornKeyword.style';

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
        <View
          style={popcornKeywordStyles.keywordWrap}
          key={`${popcornKeyword.keyword}-wrap`}>
          <View
            style={[
              popcornKeywordStyles.guageBar,
              {
                width: `${popcornKeyword.count}%`,
                backgroundColor: popcornKeyword.isPositive
                  ? palette.Primary.Assistive
                  : palette.Fill.Assistive,
              },
            ]}
            key={`${popcornKeyword.keyword}-guage-bar`}
          />
          <View
            style={popcornKeywordStyles.typographyWrap}
            key={`${popcornKeyword.keyword}-typography-wrap`}>
            <Typography
              style="Label1"
              color={
                popcornKeyword.isPositive
                  ? palette.Primary.Deep
                  : palette.Text.Alternative
              }
              key={`${popcornKeyword.keyword}`}>
              {popcornKeyword.keyword}
            </Typography>
            <Typography
              style="Label2"
              color={
                popcornKeyword.isPositive
                  ? palette.Primary.Deep
                  : palette.Text.Alternative
              }
              key={`${popcornKeyword.keyword}-${popcornKeyword.count}`}>
              {popcornKeyword.count.toString()}
            </Typography>
          </View>
        </View>
      ))}
    </>
  );
};

export default PopcornKeyword;
