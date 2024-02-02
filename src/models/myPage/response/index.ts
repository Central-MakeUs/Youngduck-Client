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
  posterImgUrl: string;
  afterScreening: boolean;
  screeningReview: boolean;
  locationReview: boolean;
  serviceReview: boolean;
  review: string;
  hasAgreed: boolean;
  screeningId: number;
  screeningTitle: string;
  startDate: string;
  endDate: string;
  profileImg: string;
}

export interface IPopcornReviewProps {
  posterImgUrl: string;
  title: string;
  directorName: string;
  popcornOfWeek: string;
  userId: number;
  nickName: string;
  profileImgNum: number;
  popcornId: number;
  hasWatched: true;
  beforeScreening: true;
  afterScreening: true;
  review: string;
  hasAgreed: true;
  popcornPositive: TScreeningPositiveReview<boolean>;
  popcornNegative: TScreeningNegativeReview<boolean>;
}
