import Carousel from '@/components/carousel';
import DefaultContainer from '@/components/container/defaultContainer';

const ReviewScreening = () => {
  // carousel 에 보여질 데이터 배열
  const data = [
    {
      id: 1,
      uri: 'https://cdn.pixabay.com/photo/2017/07/13/23/11/cinema-2502213_1280.jpg',
      type: '영화제',
      title: '부산영화제',
      review: ['재밌어요', '멋있어요'],
    },
    {
      id: 2,
      uri: 'https://cdn.pixabay.com/photo/2017/07/13/23/11/cinema-2502213_1280.jpg',
      type: '영화제',
      title: '부산영화제',
      review: ['재밌어요', '멋있어요'],
    },
    {
      id: 3,
      uri: 'https://cdn.pixabay.com/photo/2017/07/13/23/11/cinema-2502213_1280.jpg',
      type: '영화제',
      title: '부산영화제',
      review: ['재밌어요', '멋있어요'],
    },
  ];

  return (
    //<DefaultContainer>
    <Carousel data={data} />
    //</DefaultContainer>
  );
};
export default ReviewScreening;
