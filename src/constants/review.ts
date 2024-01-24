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
