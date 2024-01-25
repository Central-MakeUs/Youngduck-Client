import {View} from 'react-native';
import {useState} from 'react';

import DefaultContainer from '@/components/container/defaultContainer';
import SubTitle from '@/components/title/subTitle';
import Typography from '@/components/typography';
import KeywordItem from '@/components/items/keywordItem';
import BoxButton from '@/components/buttons/boxButton';
import DetailPositivePlus from '../../components/detailPositivePlus';
import palette from '@/styles/theme/color';

import {detailStatisticStyles} from './DetailStatisticScreen.style';

const DetailStatisticScreen = () => {
  const [positive, setPositive] = useState<boolean>(false);
  const [negative, setNegative] = useState<boolean>(false);
  return (
    <View style={detailStatisticStyles.container}>
      {/*좋았던 리뷰 통계*/}
      <SubTitle text="좋았던 점" mt={24} />
      <DefaultContainer>
        <Typography style="Body2" color={palette.Text.Alternative} mb={12}>
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
        {positive && <DetailPositivePlus />}
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
          연출이 좋았어요
        </Typography>

        <KeywordItem
          keyword="씨네마의 연출"
          isPositive={false}
          totalCount={100}
          count={84}
        />
        <KeywordItem
          keyword="씨네마의 연출"
          isPositive={false}
          totalCount={100}
          count={84}
        />
        <KeywordItem
          keyword="씨네마의 연출"
          isPositive={false}
          totalCount={100}
          count={84}
        />
        <KeywordItem
          keyword="씨네마의 연출"
          isPositive={false}
          totalCount={100}
          count={84}
        />
        {negative && <DetailPositivePlus />}
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
