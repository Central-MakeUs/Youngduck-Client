// 스크리닝 등록하기 요청 body 타입
export interface IScreeningBodyRequest {
  posterImgUrl: string;
  screeningTitle: string;
  hostName: string;
  category: string;
  screeningStartDate: string;
  screeningEndDate: string;
  screeningstartTime: string;
  location: string;
  information?: string;
  formUrl: string;
  hostPoneNumber?: string;
  hostEmail?: string;
  hasAgreed: true;
}
