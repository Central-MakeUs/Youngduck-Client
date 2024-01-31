import BoxButton from '@/components/buttons/boxButton';
import DefaultContainer from '@/components/container/defaultContainer';
import Divider from '@/components/divider';
import Typography from '@/components/typography';
import {View} from 'react-native';
import detailMovieStyles from './DetailPopcorn.style';

interface IDetailPopcornProps {
  movieTitle: string;
  directorName: string;
  detail: string;
  isMoreDetailMode: boolean;
  toggleNumberOfLinesState: () => void;
}

const DetailPopcorn = ({
  movieTitle,
  directorName,
  isMoreDetailMode,
  detail,
  toggleNumberOfLinesState,
}: IDetailPopcornProps) => {
  return (
    <DefaultContainer>
      <View style={detailMovieStyles.introduceWrap}>
        <Typography style="Label2">1월 첫째주 팝콘작</Typography>
        <Typography style="Title2">
          {movieTitle === undefined ? '' : movieTitle}
        </Typography>
        <Typography style="Body2">
          {directorName === undefined ? '' : directorName}
        </Typography>
        <Divider height={1} mb={16} mt={16} />
        <Typography style="Body1" numberOfLines={isMoreDetailMode ? -1 : 3}>
          {detail === undefined ? '' : detail}
        </Typography>
        <BoxButton onPress={toggleNumberOfLinesState} variant="default" mt={16}>
          {isMoreDetailMode ? '접기' : '설명 더 보기'}
        </BoxButton>
      </View>
    </DefaultContainer>
  );
};

export default DetailPopcorn;
