import {View} from 'react-native';

import DefaultContainer from '@/components/container/defaultContainer';
import Typography from '@/components/typography';
import palette from '@/styles/theme/color';
import DetailInfo from '../../components/detailInfo';
import DetailInfoPhone from '../../components/detailInfoPhone';
import {getKorDateRange} from '@/utils/getDate';
import {IScreeningDetailContent} from '@/models/screening/response/detailResponseDto';

import {detailInfoStyles} from './DetailInfoScreen.style';

interface IDetailInfoProps {
  item: IScreeningDetailContent;
}
const DetailInfoScreen = ({item}: IDetailInfoProps) => {
  //console.log(item);
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
          <DetailInfoPhone type="call" content={item.hostPoneNumber} />
        )}
        {item.hostEmail && (
          <DetailInfoPhone type="mail" content={item.hostEmail} />
        )}
        <View style={detailInfoStyles.bottom} />
      </DefaultContainer>
    </View>
  );
};
export default DetailInfoScreen;
