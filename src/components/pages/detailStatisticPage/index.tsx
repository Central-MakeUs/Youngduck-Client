import {View} from 'react-native';
import {useState} from 'react';

import DefaultContainer from '@/components/container/defaultContainer';
import SubTitle from '@/components/title/subTitle';
import Typography from '@/components/typography';
import KeywordItem from '@/components/items/keywordItem';
import BoxButton from '@/components/buttons/boxButton';
import DetailPlusList from './component/detailPlusList';
import palette from '@/styles/theme/color';

import {detailStatisticStyles} from './DetailStatisticPage.style';
import {useQuery} from '@tanstack/react-query';
import {getScreeningMyStatistics} from '@/apis/screening/detail';
import LoadingPage from '../loadingPage';
import {negativeReview, positiveReview} from '@/constants/review';

interface IDetailStatisticProp {
  id: number;
}

const DetailStatisticScreen = ({id}: IDetailStatisticProp) => {
  const {data, isLoading} = useQuery({
    queryKey: ['screeningMyStatistic'],
    queryFn: () => getScreeningMyStatistics(id),
  });
  console.log('통계 데이터', data?.data);

  const [positive, setPositive] = useState<boolean>(false);
  const [negative, setNegative] = useState<boolean>(false);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <View style={detailStatisticStyles.container}>
      {/*좋았던 리뷰 통계*/}
      <SubTitle text="좋았던 점" mt={24} />
      <DefaultContainer>
        <Typography style="Body2" color={palette.Text.Alternative} mb={12}>
          {positiveReview.direct.title}
        </Typography>

        {data?.data.positiveCount &&
          positiveReview.direct.select.map(item => (
            <KeywordItem
              key={item.label}
              keyword={item.label}
              isPositive={true}
              totalCount={data.data.totalCount}
              count={data?.data.positiveCount[item.value]}
            />
          ))}

        {positive && data && (
          <DetailPlusList type="positive" data={data?.data} />
        )}
        <BoxButton
          variant="default"
          onPress={() => {
            setPositive(!positive);
          }}
          mt={12}>
          {positive ? '좋았던 점 닫기' : '모두 보기'}
        </BoxButton>
      </DefaultContainer>
      {/*부정적인 통계*/}
      <SubTitle text="아쉬웠던 점" mt={40} />
      <DefaultContainer>
        <Typography style="Body2" color={palette.Text.Alternative} mb={12}>
          {negativeReview.direct.title}
        </Typography>

        {data?.data.negativeCount &&
          negativeReview.direct.select.map(item => (
            <KeywordItem
              key={item.label}
              keyword={item.label}
              isPositive={false}
              totalCount={data.data.totalCount}
              count={data?.data.negativeCount[item.value]}
            />
          ))}

        {negative && data && (
          <DetailPlusList type="negative" data={data?.data} />
        )}
        <BoxButton
          variant="default"
          onPress={() => {
            setNegative(!negative);
          }}
          mt={12}>
          {negative ? '아쉬운 점 닫기' : '모두 보기'}
        </BoxButton>
      </DefaultContainer>
    </View>
  );
};
export default DetailStatisticScreen;
