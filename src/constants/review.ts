type SelectItem = {
  value: string;
  label: string;
};

type ReviewCategory = {
  title: string;
  select: SelectItem[];
};

type PositiveReviewType = {
  [key: string]: ReviewCategory;
};

export const reviewTypes = ['direct', 'art', 'music', 'content', 'actor'];

// 스크리닝 단일 선택 상수
export const labels = ['기대만큼 좋았어요', '기대보다 아쉬웠어요'];
export const reaction = ['좋았어요', '아쉬웠어요'];

export const reviewOptions = [
  {subtitle: '작품에 대한 저의 느낌은', option: 'screeningReview'},
  {subtitle: '장소 선정은', option: 'locationReview'},
  {subtitle: '운영 방식은', option: 'serviceReview'},
];

export const positiveReview: PositiveReviewType = {
  direct: {
    title: '연출이 좋았어요',
    select: [
      {
        value: 'cineMaster',
        label: '씨네마스터의 연출',
      },
      {
        value: 'greatFilming',
        label: '최고의 촬영',
      },
      {
        value: 'pom',
        label: '폼 미친 편집',
      },
      {
        value: 'animationIsGood',
        label: '애니메이션 - 작화의 힘',
      },
    ],
  },
  art: {
    title: '미술이 좋았어요',
    select: [
      //{
      //  value: '',
      //  label: '영화미술의 교과서',
      //},
      {
        value: 'artIsGood',
        label: '세트가 아트다',
      },
      {
        value: 'custom',
        label: '의상이 날개옷',
      },
    ],
  },
  music: {
    title: '음악이 좋았어요',
    select: [
      {
        value: 'music',
        label: '가슴이 뛰는 음악',
      },
      //{
      //  value: '',
      //  label: '영혼을 울리는 OST',
      //},
    ],
  },
  content: {
    title: '내용이 좋았어요',
    select: [
      //{
      //  value: '',
      //  label: '신이 쓴 각본',
      //},
      {
        value: 'topicIsGood',
        label: '의미있는 주제',
      },
      {
        value: 'linesAreGood',
        label: '말맛 좋은 대사',
      },
      {
        value: 'endingIsGood',
        label: '확실한 기승전결',
      },
    ],
  },
  actor: {
    title: '내용이 좋았어요',
    select: [
      {
        value: 'castingIsGood',
        label: '찰떡같은 캐스팅',
      },
      {
        value: 'actingIsGood',
        label: '연기력 폭발',
      },
      {
        value: 'chemistryIsGood',
        label: '케미 맛집',
      },
    ],
  },
};

export const negativeReview: PositiveReviewType = {
  direct: {
    title: '연출이 아쉬워요',
    select: [
      {
        value: 'iffy',
        label: '애매한 연출',
      },
      {
        value: 'badEditing',
        label: '화면이 잘 안 붙네',
      },
      {
        value: 'badAngle',
        label: '정돈 안 된 앵글',
      },
    ],
  },
  art: {
    title: '미술이 아쉬워요',
    select: [
      {
        value: 'badDetail',
        label: '아쉬운 디테일',
      },
      {
        value: 'badColor',
        label: '칙칙한 색감',
      },
      {
        value: 'badCustom',
        label: '어색한 복장',
      },
    ],
  },
  music: {
    title: '음악이 아쉬워요',
    select: [
      {
        value: 'badMusic',
        label: '음악이 별로',
      },
      {
        value: 'badSound',
        label: '음향이 별로',
      },
    ],
  },
  content: {
    title: '내용이 아쉬워요',
    select: [
      {
        value: 'badEnding',
        label: '의문의 결말',
      },
      {
        value: 'endingLoose',
        label: '힘빠지는 후반부',
      },
      {
        value: 'noDetail',
        label: '회수 안 된 떡밥',
      },
      {
        value: 'badTopic',
        label: '공감 불가 주제의식',
      },
    ],
  },
  actor: {
    title: '배우가 아쉬워요',
    select: [
      {
        value: 'badActing',
        label: '눈물나는 연기력',
      },
      {
        value: 'badCasting',
        label: '미스 캐스팅',
      },
    ],
  },
};
