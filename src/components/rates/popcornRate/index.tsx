import {Pressable, Text, View} from 'react-native';
import Typography from '../../typography';
import palette from '@/styles/theme/color';
import DisappointedSvg from '@/assets/icons/disappointed.svg';
import SatisfiedSvg from '@/assets/icons/satisfied.svg';
import popcornRateStyles from './PopcornRate.style';
import text from '@/styles/theme/typography';

interface IPopcornRateProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopcornRate = ({isOpen, setIsOpen}: IPopcornRateProps) => {
  return (
    <View
      style={
        isOpen
          ? popcornRateStyles.openedContainer
          : popcornRateStyles.closedContainer
      }>
      {isOpen && (
        <View style={popcornRateStyles.manualWrap}>
          <Typography style="Label1" color={palette.Primary.Dark} mb={8}>
            팝콘 키워드
          </Typography>
          <Text
            style={[text['Body2'], popcornRateStyles.manualDesc]}
            allowFontScaling={
              false
            }>{`팝콘지수는 관람 전의 기대 대비 관람 후\n만족도를 나타내는 점수로,\n만족도가 높을 수록 팝콘이 바삭해집니다`}</Text>
          <View style={popcornRateStyles.manual}>
            <DisappointedSvg />
            <Typography style="Label2">눅눅한 파콩</Typography>
            <Typography style="Body2" color={palette.Text.Alternative}>
              영화의 만족도가 낮을 수록
            </Typography>
            <Typography style="Body2" color={palette.Text.Alternative} mb={16}>
              팝콘이 눅눅해집니다
            </Typography>
            <SatisfiedSvg />
            <Typography style="Label2">바삭한 파콩</Typography>
            <Typography style="Body2" color={palette.Text.Alternative}>
              영화의 만족도가 높을 수록
            </Typography>
            <Typography style="Body2" color={palette.Text.Alternative}>
              팝콘이 바삭해집니다
            </Typography>
          </View>
        </View>
      )}
      <Pressable
        onPress={() => setIsOpen(!isOpen)}
        style={popcornRateStyles.button}>
        <Typography
          style="Label1"
          color={isOpen ? palette.Primary.Deep : palette.Primary.Dark}>
          {isOpen ? '접기' : '팝콘지수란?'}
        </Typography>
      </Pressable>
    </View>
  );
};

export default PopcornRate;
