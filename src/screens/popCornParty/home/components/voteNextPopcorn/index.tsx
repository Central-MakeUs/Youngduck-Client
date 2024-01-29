import DefaultContainer from '@/components/container/defaultContainer';
import PopcornItem from '@/components/items/popcornItem';
import SubTitle from '@/components/title/subTitle';
import {TPopcornRecommendData} from '@/models/popcornParty/reponse';
import {ActivityIndicator} from 'react-native';

type IVoteNextPopcornProp = Record<
  'popcornRecommendData',
  TPopcornRecommendData[]
> & {
  title: string;
  isLoading: boolean;
};

const VoteNextPopcorn = ({
  title,
  popcornRecommendData,
  isLoading,
}: IVoteNextPopcornProp) => {
  return (
    <>
      <SubTitle text={title} mb={8} />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <DefaultContainer>
          {popcornRecommendData &&
            popcornRecommendData.map((popcornData: TPopcornRecommendData) => (
              <PopcornItem
                key={popcornData.movieTitle}
                id={popcornData.id}
                movieTitle={popcornData.movieTitle}
                imageUrl={popcornData.imageUrl}
                recommendationCount={popcornData.recommendationCount}
                recommendationReason={popcornData.recommendationReason}
                movieDirector={popcornData.movieDirector}
              />
            ))}
        </DefaultContainer>
      )}
    </>
  );
};

export default VoteNextPopcorn;
