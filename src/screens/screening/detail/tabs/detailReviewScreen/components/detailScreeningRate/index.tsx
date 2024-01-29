import ReviewRate from '@/components/rates/reviewRate';
import ScreeningRate from '@/components/rates/screeningRate';
import {TScreeningReviewCountResponse} from '@/models/screening/response/reviewResponseDto';

interface IDetailScreeningRate {
  rates: TScreeningReviewCountResponse;
}
const DetailScreeningRate = ({rates}: IDetailScreeningRate) => {
  return (
    <ScreeningRate score={rates?.screeningRate} mode="screeningRate">
      <ReviewRate
        category="작품 감상"
        negative={rates?.serviceCountNeg}
        positive={rates?.serviceCountPos}
      />
      <ReviewRate
        category="상영 장소"
        negative={rates?.locationCountNeg}
        positive={rates.locationCountPos}
      />
      <ReviewRate
        category="운영 방식"
        negative={rates?.serviceCountNeg}
        positive={rates?.serviceCountPos}
      />
    </ScreeningRate>
  );
};
export default DetailScreeningRate;
