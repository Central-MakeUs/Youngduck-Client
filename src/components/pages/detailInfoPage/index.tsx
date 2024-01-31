import {View} from 'react-native';

import DefaultContainer from '@/components/container/defaultContainer';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';

import {getKorDateRange} from '@/utils/getDate';
import {
  IScreeningDetailContent,
  IScreeningMyDetailResponse,
} from '@/models/screening/response/detailResponseDto';
import DetailInfo from './components/detailInfo';
import DetailContact from './components/detailContact';
import {detailInfoStyles} from './DetailInfoPage.style';

interface IDetailInfoProps {
  item: IScreeningDetailContent | IScreeningMyDetailResponse;
}
const DetailInfoPage = ({item}: IDetailInfoProps) => {
  return (
    <View>
      <DefaultContainer>
        <View style={detailInfoStyles.title}>
          <DetailInfo title="주최명" content={item.hostName} />
        </View>

        <DetailInfo
          title="일시"
          content={getKorDateRange(
            item.screeningStartDate,
            item.screeningEndDate,
          )}
        />

        <DetailInfo title="장소" content={item.location} />

        {item.information.length > 0 && (
          <DetailInfo title="추가 설명" content={item.information} />
        )}

        {(item.hostEmail || item.hostPoneNumber) && (
          <Typography mt={24} style="Title2" color={palette.Text.Normal}>
            주최 연락처
          </Typography>
        )}
        {item.hostPoneNumber && (
          <DetailContact type="call" content={item.hostPoneNumber} />
        )}
        {item.hostEmail && (
          <DetailContact type="mail" content={item.hostEmail} />
        )}
        <View style={detailInfoStyles.bottom} />
      </DefaultContainer>
    </View>
  );
};
export default DetailInfoPage;
