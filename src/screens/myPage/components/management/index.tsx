import SvgIcons from '@/assets/svgIcons';
import Typography from '@/components/typography';
import {Pressable, View} from 'react-native';
import managementStyles from './Management.style';

interface IManagementProps {
  postName: string;
  count: number;
  idx: number;
}

const Management = ({postName, count, idx}: IManagementProps) => {
  return (
    <Pressable
      style={[
        managementStyles.container,
        {
          borderBottomWidth: idx === 2 ? 0 : 1,
        },
      ]}>
      <Typography style="Label2">{postName}</Typography>
      <View style={managementStyles.countArrowWrap}>
        <Typography style="Body2">{count.toString()}</Typography>
        <SvgIcons.RightArrowIcon width={6.86} height={12} />
      </View>
    </Pressable>
  );
};
export default Management;
