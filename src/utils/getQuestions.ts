interface IGetQuestionsProp {
  isSelectedPositive: boolean;
}

const getQuestions = ({isSelectedPositive}: IGetQuestionsProp) => {
  const questions = [
    {
      category: 'director',
      subject: `연출이 ${isSelectedPositive ? '좋았어요' : '아쉬워요'}`,
      answers: isSelectedPositive
        ? [
            '씨네마스터의 연출',
            '최고의 촬영',
            '폼 미친 편집',
            '애니메이션 - 작화의 힘',
          ]
        : ['애매한 연출', '화면이 잘 안 붙네', '정돈 안 된 앵글'],
    },
    {
      category: 'art',
      subject: `미술이 ${isSelectedPositive ? '좋았어요' : '아쉬워요'}`,
      answers: isSelectedPositive
        ? ['영화미술의 교과서', '세트가 아트다', '의상이 날개옷']
        : ['아쉬운 디테일', '칙칙한 색감', '어색한 복장'],
    },
    {
      category: 'music',
      subject: `음악이 ${isSelectedPositive ? '좋았어요' : '아쉬워요'}`,
      answers: isSelectedPositive
        ? ['가슴뛰는 음악', '영혼을 울리는 OST']
        : ['음악이 별로', '음향이 별로'],
    },
    {
      category: 'content',
      subject: `내용이 ${isSelectedPositive ? '좋았어요' : '아쉬워요'}`,
      answers: isSelectedPositive
        ? ['신이 쓴 각본', '의미있는 주제', '말맛 좋은 대사', '확실한 기승전결']
        : [
            '의문의 결말',
            '힘빠지는 후반부',
            '회수 안 된 떡밥',
            '공감 불가 주제의식',
          ],
    },
    {
      category: 'actor',
      subject: `배우가 ${isSelectedPositive ? '좋았어요' : '아쉬워요'}`,
      answers: isSelectedPositive
        ? ['찰떡같은 캐스팅', '연기력 폭발', '케미 맛집']
        : ['눈물나는 연기력', '미스 캐스팅'],
    },
  ];

  return questions;
};

export default getQuestions;
