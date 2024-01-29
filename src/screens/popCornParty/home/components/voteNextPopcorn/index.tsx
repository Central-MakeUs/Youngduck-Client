import DefaultContainer from '@/components/container/defaultContainer';
import PopcornItem from '@/components/items/popcornItem';
import SubTitle from '@/components/title/subTitle';
import {TRandomPopcornRecommendData} from '@/models/popcornParty/reponse';

type IVoteNextPopcornProp = Record<
  'popcornRecommendData',
  TRandomPopcornRecommendData[]
> & {
  title: string;
};

const VoteNextPopcorn = ({
  title,
  popcornRecommendData,
}: IVoteNextPopcornProp) => {
  return (
    <>
      <SubTitle text={title} mb={8} />
      <DefaultContainer>
        {popcornRecommendData &&
          popcornRecommendData.map(
            (popcornData: TRandomPopcornRecommendData) => (
              <PopcornItem
                key={popcornData.movieTitle}
                id={popcornData.id}
                movieTitle={popcornData.movieTitle}
                imageUrl={popcornData.imageUrl}
                recommendationCount={popcornData.recommendationCount}
                recommendationReason={popcornData.recommendationReason}
                movieDirector={popcornData.movieDirector}
              />
            ),
          )}
      </DefaultContainer>
    </>
  );
};

export default VoteNextPopcorn;
