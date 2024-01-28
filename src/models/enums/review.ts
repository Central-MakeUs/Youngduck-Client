// 스크리닝 긍정 리뷰 타입
export type TScreeningPositiveReview = {
  cineMaster: number;
  greatFilming: number;
  pom: number;
  animationIsGood: number;
  artIsGood: number;
  setIsArt: number;
  custom: number;
  music: number;
  ost: number;
  writtenByGod: number;
  topicIsGood: number;
  linesAreGood: number;
  endingIsGood: number;
  castingIsGood: number;
  actingIsGood: number;
  chemistryIsGood: number;
};

// 스크리닝 부정 리뷰 타입
export type TScreeningNegativeReview = {
  iffy: number;
  badEditing: number;
  badAngle: number;
  badDetail: number;
  badColor: number;
  badCustom: number;
  badMusic: number;
  badSound: number;
  badEnding: number;
  endingLoose: number;
  noDetail: number;
  badTopic: number;
  badActing: number;
  badCasting: number;
};
