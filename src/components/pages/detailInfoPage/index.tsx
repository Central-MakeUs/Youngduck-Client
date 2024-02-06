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
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface IDetailInfoProps {
  item: IScreeningDetailContent | IScreeningMyDetailResponse;
}
const DetailInfoPage = ({item}: IDetailInfoProps) => {
  const {bottom} = useSafeAreaInsets();
  return (
    <View style={{paddingBottom: bottom}}>
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

        {(item.hostEmail || item.hostPhoneNumber) && (
          <Typography mt={24} style="Title2" color={palette.Text.Normal}>
            주최 연락처
          </Typography>
        )}
        {item.hostPhoneNumber && (
          <DetailContact type="call" content={item.hostPhoneNumber} />
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
