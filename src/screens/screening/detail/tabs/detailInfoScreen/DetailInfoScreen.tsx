import {View} from 'react-native';

import DefaultContainer from '@/components/container/defaultContainer';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import DetailInfo from '../../components/detailInfo';
import DetailInfoPhone from '../../components/detailInfoPhone';

import {detailInfoStyles} from './DetailInfoScreen.style';

const DetailInfoScreen = () => {
  return (
    <View>
      <DefaultContainer>
        <View style={detailInfoStyles.title}>
          <DetailInfo title="주최명" content="홍익대학교 영화동아리 Dromapic" />
        </View>

        <DetailInfo title="일시" content="2024년 1월 5일-2024년 1월 6일" />

        <DetailInfo title="장소" content="연남동 어쩌구시어터" />

        <DetailInfo
          title="추가 설명"
          content="홍익대학교 시각디자인학과에서 영화를 희망하는 사람들이 모인 영화
          동아리"
        />

        <Typography mt={24} style="Title2" color={palette.Text.Normal}>
          주최 연락처
        </Typography>
        <DetailInfoPhone type="call" content="010-0000-0000" />
        <View style={detailInfoStyles.bottomContent}>
          <DetailInfoPhone type="mail" content="010-0000-0000" />
        </View>
      </DefaultContainer>
    </View>
  );
};
export default DetailInfoScreen;
