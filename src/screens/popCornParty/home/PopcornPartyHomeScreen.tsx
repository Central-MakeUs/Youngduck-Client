import Banner from '@/components/banner';
import DefaultScrollContainer from '@/components/container/defaultScrollContainer';
import Divider from '@/components/divider';
import VoteNextPopcorn from './components/voteNextPopcorn';
import TrendingMovie from './components/trendingMovie';
import TrendingPopcorn from './components/trendingPopcorn';

function PopcornPartyHomeScreen() {
  return (
    <DefaultScrollContainer>
      <Banner type="popcornParty" onPress={() => {}} />
      <TrendingPopcorn />
      <TrendingMovie />
      <Divider height={8} mt={24} mb={16} />
      <VoteNextPopcorn />
    </DefaultScrollContainer>
  );
}

export default PopcornPartyHomeScreen;
