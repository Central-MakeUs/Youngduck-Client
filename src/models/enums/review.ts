// 스크리닝 긍정 리뷰 타입
export type TScreeningPositiveReview<T> = {
  cineMaster: T;
  greatFilming: T;
  pom: T;
  animationIsGood: T;
  artIsGood: T;
  setIsArt: T;
  custom: T;
  music: T;
  ost: T;
  writtenByGod: T;
  topicIsGood: T;
  linesAreGood: T;
  endingIsGood: T;
  castingIsGood: T;
  actingIsGood: T;
  chemistryIsGood: T;
};

// 스크리닝 부정 리뷰 타입
export type TScreeningNegativeReview<T> = {
  iffy: T;
  badEditing: T;
  badAngle: T;
  badDetail: T;
  badColor: T;
  badCustom: T;
  badMusic: T;
  badSound: T;
  badEnding: T;
  endingLoose: T;
  noDetail: T;
  badTopic: T;
  badActing: T;
  badCasting: T;
};
