import {View} from 'react-native';

import KeywordItem from '@/components/items/keywordItem';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import {IScreeningMyStatisticsResponse} from '@/models/screening/response/detailResponseDto';
import {negativeReview, positiveReview} from '@/constants/review';
import {
  TScreeningNegativeReviewKey,
  TScreeningPositiveReviewKey,
} from '@/models/enums/review';

interface IDetailPlusListProp {
  type: 'positive' | 'negative';
  data: IScreeningMyStatisticsResponse;
}
const DetailPlusList = ({type, data}: IDetailPlusListProp) => {
  const keywords = ['art', 'music', 'content', 'actor'];
  const typeReview = type === 'positive' ? positiveReview : negativeReview;

  return (
    <>
      {keywords.map(keyword => (
        <View key={keyword}>
          <Typography
            key={keyword}
            style="Body2"
            color={palette.Text.Alternative}
            mb={12}
            mt={12}>
            {typeReview[keyword].title}
          </Typography>
          {typeReview[keyword].select.map((item, idx) => (
            <KeywordItem
              key={idx}
              keyword={item.label}
              isPositive={type === 'positive' ? true : false}
              totalCount={10}
              count={
                type === 'negative'
                  ? data.negativeCount[
                      item.value as TScreeningNegativeReviewKey
                    ]
                  : data?.positiveCount[
                      item.value as TScreeningPositiveReviewKey
                    ]
              }
            />
          ))}
        </View>
      ))}
    </>
  );
};
export default DetailPlusList;
