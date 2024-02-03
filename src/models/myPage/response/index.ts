import {
  TScreeningNegativeReview,
  TScreeningPositiveReview,
} from '@/models/enums/review';

interface ICommonScreeningProps {
  posterImgUrl: string;
  category: string;
  screeningStartDate: string;
  screeningEndDate: string;
  screeningStartTime: string;
  location: string;
  information: string;
  hasAgreed: boolean;
  private: boolean;
}

export interface IWatchedScreeningProps extends ICommonScreeningProps {
  createdAt: string;
  updatedAt: string;
  id: number;
  title: string;
  hostInfo: {
    hostName: string;
    hostPhoneNumber: string;
    hostEmail: string;
  };
  positiveCount: TScreeningPositiveReview<number>;
  negativeCount: TScreeningNegativeReview<number>;
  month: string;
  participationUrl: string;
  screeningRate: number;
  movieReviewCountNeg: number;
  movieReviewCountPos: number;
  locationCountNeg: number;
  locationCountPos: number;
  serviceCountNeg: number;
  serviceCountPos: number;
}

export interface IJjimScreeningProps extends ICommonScreeningProps {
  screeningId: number;
  screeningTitle: string;
  hostName: string;
  hostPhoneNumber: string;
  hostEmail: string;
  formUrl: string;
}

export interface IScreeningDataProps {
  watchedScreeningData: IWatchedScreeningProps[] | undefined;
  jjimScreeningData: IJjimScreeningProps[] | undefined;
}

export interface IScreeningReviewProps {
  afterScreening: boolean;
  review: string;
  screeningId: number;
  screeningTitle: string;
  startDate: string;
  endDate: string;
  posterImgUrl: string;
}

export interface IPopcornReviewProps {
  popcorn: {
    directorName: string;
    id: number;
    imageUrl: string;
    movieTitle: string;
    recommendationReason: string;
    updatedAt: string;
  };
  popcornPositive: TScreeningPositiveReview<boolean>;
  popcornNegative: TScreeningNegativeReview<boolean>;
}
