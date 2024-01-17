import DefaultContainer from '@/components/container/defaultContainer';
import PopcornItem from '@/components/items/popcornItem';
import SubTitle from '@/components/title/subTitle';
import {popcornDatas} from '../../dummy';
import {IPopcornItemProps} from '@/types/popcornParty';

const VoteNextPopcorn = () => {
  return (
    <>
      <SubTitle text="다음 주 팝콘작 투표하기" mb={8} />
      <DefaultContainer>
        {popcornDatas.map((popcornData: IPopcornItemProps) => (
          <PopcornItem
            key={popcornData.title}
            id={popcornData.id}
            imageURL={popcornData.imageURL}
            title={popcornData.title}
            count={popcornData.count}
            nickname={popcornData.nickname}
            content={popcornData.content}
            isVoted={popcornData.isVoted}
          />
        ))}
      </DefaultContainer>
    </>
  );
};

export default VoteNextPopcorn;
