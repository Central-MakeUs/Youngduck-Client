import {View} from 'react-native';

import DefaultContainer from '@/components/container/defaultContainer';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import Call from '@/assets/icons/call.svg';
import Mail from '@/assets/icons/mail.svg';

import {detailInfoStyles} from './DetailInfoScreen.style';

const DetailInfoScreen = () => {
  return (
    <View>
      <DefaultContainer>
        {/*주최명*/}
        <Typography style="Label3" color={palette.Text.Normal} mt={24}>
          주최명
        </Typography>
        <Typography style="Body2" color={palette.Text.Normal} mt={4}>
          홍익대학교 영화동아리 Dromapic
        </Typography>

        {/*일시*/}
        <Typography style="Label3" color={palette.Text.Normal} mt={8}>
          일시
        </Typography>
        <Typography style="Body2" color={palette.Text.Normal} mt={4}>
          2024년 1월 5일-2024년 1월 6일
        </Typography>

        {/*장소*/}
        <Typography style="Label3" color={palette.Text.Normal} mt={8}>
          장소
        </Typography>
        <Typography style="Body2" color={palette.Text.Normal} mt={4}>
          연남동 어쩌구시어터
        </Typography>

        {/*추가 설명*/}
        <Typography style="Label3" color={palette.Text.Normal} mt={8}>
          추가 설명
        </Typography>
        <Typography style="Body2" color={palette.Text.Normal} mt={4}>
          홍익대학교 시각디자인학과에서 영화를 희망하는 사람들이 모인 영화
          동아리
        </Typography>

        <Typography mt={24} style="Title2" color={palette.Text.Normal}>
          주최 연락처
        </Typography>
        <View style={detailInfoStyles.content}>
          <Call />
          <Typography style="Body2" color={palette.Text.Normal} ml={8}>
            010-0000-0000
          </Typography>
        </View>
        <View style={detailInfoStyles.bottomContent}>
          <Mail />
          <Typography style="Body2" color={palette.Text.Normal} ml={8}>
            010-0000-0000
          </Typography>
        </View>
      </DefaultContainer>
    </View>
  );
};
export default DetailInfoScreen;
