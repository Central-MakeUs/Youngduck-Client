interface IGetQuestionsProp {
  isSelectedPositive: boolean;
}

const getQuestions = ({isSelectedPositive}: IGetQuestionsProp) => {
  const questions = [
    {
      subject: `연출이 ${isSelectedPositive ? '좋았어요' : '아쉬워요'}`,
      answers: isSelectedPositive
        ? [
            {category: '씨네마스터의 연출', value: 'cineMaster'},
            {category: '최고의 촬영', value: 'greatFilming'},
            {category: '폼 미친 편집', value: 'pom'},
            {category: '애니메이션 - 작화의 힘', value: 'animationIsGood'},
          ]
        : [
            {category: '애매한 연출', value: 'iffy'},
            {category: '화면이 잘 안 붙네', value: 'badEditing'},
            {category: '정돈 안 된 앵글', value: 'badAngle'},
          ],
    },
    {
      subject: `미술이 ${isSelectedPositive ? '좋았어요' : '아쉬워요'}`,
      answers: isSelectedPositive
        ? [
            {category: '영화미술의 교과서', value: 'artIsGood'},
            {category: '세트가 아트다', value: 'setIsArt'},
            {category: '의상이 날개옷', value: 'custom'},
          ]
        : [
            {category: '아쉬운 디테일', value: 'badDetail'},
            {category: '칙칙한 색감', value: 'badColor'},
            {category: '어색한 복장', value: 'badCustom'},
          ],
    },
    {
      subject: `음악이 ${isSelectedPositive ? '좋았어요' : '아쉬워요'}`,
      answers: isSelectedPositive
        ? [
            {category: '가슴뛰는 음악', value: 'music'},
            {category: '영혼을 울리는 OST', value: 'ost'},
          ]
        : [
            {category: '음악이 별로', value: 'badMusic'},
            {category: '음향이 별로', value: 'badSound'},
          ],
    },
    {
      subject: `내용이 ${isSelectedPositive ? '좋았어요' : '아쉬워요'}`,
      answers: isSelectedPositive
        ? [
            {category: '신이 쓴 각본', value: 'writtenByGod'},
            {category: '의미있는 주제', value: 'topicIsGood'},
            {category: '말맛 좋은 대사', value: 'linesAreGood'},
            {category: '확실한 기승전결', value: 'endingIsGood'},
          ]
        : [
            {category: '의문의 결말', value: 'badEnding'},
            {category: '힘빠지는 후반부', value: 'endingLoose'},
            {category: '회수 안 된 떡밥', value: 'noDetail'},
            {category: '공감 불가 주제의식', value: 'badTopic'},
          ],
    },
    {
      category: 'actor',
      subject: `배우가 ${isSelectedPositive ? '좋았어요' : '아쉬워요'}`,
      answers: isSelectedPositive
        ? [
            {category: '찰떡같은 캐스팅', value: 'castingIsGood'},
            {category: '연기력 폭발', value: 'actingIsGood'},
            {category: '케미 맛집', value: 'chemistryIsGood'},
          ]
        : [
            {category: '눈물나는 연기력', value: 'badActing'},
            {category: '미스 캐스팅', value: 'badCasting'},
          ],
    },
  ];

  return questions;
};

export default getQuestions;
