import {View} from 'react-native';

import KeywordItem from '@/components/items/keywordItem';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

const DetailPlusList = () => {
  return (
    <View>
      <Typography
        style="Body2"
        color={palette.Text.Alternative}
        mb={12}
        mt={12}>
        연출이 좋았어요
      </Typography>

      <KeywordItem
        keyword="씨네마의 연출"
        isPositive={true}
        totalCount={100}
        count={84}
      />
      <KeywordItem
        keyword="씨네마의 연출"
        isPositive={true}
        totalCount={100}
        count={84}
      />
      <KeywordItem
        keyword="씨네마의 연출"
        isPositive={true}
        totalCount={100}
        count={84}
      />
      <KeywordItem
        keyword="씨네마의 연출"
        isPositive={true}
        totalCount={100}
        count={84}
      />
    </View>
  );
};
export default DetailPlusList;
