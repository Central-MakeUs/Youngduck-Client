import {api} from '@/apis';

export const postRecommendMovie = async (id: number) => {
  console.log(id);
  const res = await api.post(
    `/popcorn/recommend/vote?recommendedPopcorn=${id}`,
  );
  return res;
};
