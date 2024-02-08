import ReviewRate from '@/components/rates/reviewRate';
import ScreeningRate from '@/components/rates/screeningRate';
import {screeningRateArray} from '@/constants/review';
import {TScreeningReviewCountResponse} from '@/models/screening/response/reviewResponseDto';

interface IDetailScreeningRate {
  rates: TScreeningReviewCountResponse;
}
const ScreeningRateCard = ({rates}: IDetailScreeningRate) => {
  return (
    <ScreeningRate score={rates?.screeningRate} mode="screeningRate">
      {screeningRateArray.map(rateLabel => (
        <ReviewRate
          category={rateLabel.title}
          key={rateLabel.title}
          negative={rates[rateLabel.negative]}
          positive={rates[rateLabel.positive]}
        />
      ))}
    </ScreeningRate>
  );
};
export default ScreeningRateCard;
