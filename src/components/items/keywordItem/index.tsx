import Typography from '@/components/typography';
import keywordItemStyles from '@/screens/popCornParty/detail/popcornKeyword/PopcornKeyword.style';
import palette from '@/styles/theme/color';
import {View} from 'react-native';

interface IKeywordItemProps {
  keyword: string;
  isPositive: boolean;
  totalCount: number;
  count: number;
}

const KeywordItem = ({
  keyword,
  isPositive,
  totalCount,
  count,
}: IKeywordItemProps) => {
  return (
    <View style={keywordItemStyles.keywordWrap}>
      <View
        style={[
          keywordItemStyles.guageBar,
          {
            width: `${(count / totalCount) * 100}%`,
            backgroundColor: isPositive
              ? palette.Primary.Assistive
              : palette.Fill.Assistive,
          },
        ]}
      />
      <View style={keywordItemStyles.typographyWrap}>
        <Typography
          style="Label1"
          color={isPositive ? palette.Primary.Deep : palette.Text.Alternative}>
          {keyword}
        </Typography>
        <Typography
          style="Label2"
          color={isPositive ? palette.Primary.Deep : palette.Text.Alternative}>
          {count.toString()}
        </Typography>
      </View>
    </View>
  );
};

export default KeywordItem;
