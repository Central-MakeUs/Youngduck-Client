import DefaultContainer from '@/components/container/defaultContainer';
import EmptyItem from '@/components/items/emptyItem';
import PopcornItem from '@/components/items/popcornItem';
import Loading from '@/components/loading';
import SubTitle from '@/components/title/subTitle';
import {TPopcornRecommendData} from '@/models/popcornParty/reponse';

type IVoteNextPopcornProp = Record<
  'popcornRecommendData',
  TPopcornRecommendData[]
> & {
  title: string;
  isLoading: boolean;
  voteMovieMutate: (id: number) => void;
};

const VoteNextPopcorn = ({
  title,
  popcornRecommendData,
  isLoading,
  voteMovieMutate,
}: IVoteNextPopcornProp) => {
  return (
    <>
      <SubTitle text={title} mb={8} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {popcornRecommendData.length === 0 && (
            <EmptyItem text="아직 추천 목록이 없어요" />
          )}
          {popcornRecommendData.length > 0 && (
            <DefaultContainer>
              {popcornRecommendData &&
                popcornRecommendData.map(
                  (popcornData: TPopcornRecommendData) => (
                    <PopcornItem
                      key={popcornData.movieTitle}
                      id={popcornData.id}
                      movieTitle={popcornData.movieTitle}
                      imageUrl={popcornData.imageUrl}
                      recommendationCount={popcornData.recommendationCount}
                      recommendationReason={popcornData.recommendationReason}
                      movieDirector={popcornData.movieDirector}
                      voteMovieMutate={voteMovieMutate}
                    />
                  ),
                )}
            </DefaultContainer>
          )}
        </>
      )}
    </>
  );
};

export default VoteNextPopcorn;
