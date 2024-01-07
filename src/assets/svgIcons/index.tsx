import {SvgIconProps} from '@/types/svgIcons';
import {View} from 'react-native';
import {Path, Svg} from 'react-native-svg';

const SvgIcons = {
  LineIcon: ({width = 8, height = 2, fill = 'white'}: SvgIconProps) => (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none">
      <Path
        d="M0 1C0 0.447715 0.447715 0 1 0H7C7.55228 0 8 0.447715 8 1C8 1.55228 7.55228 2 7 2H1C0.447715 2 0 1.55228 0 1Z"
        fill={fill}
      />
    </Svg>
  ),
  RectangleIcon: ({width = 12, height = 10, fill = 'white'}: SvgIconProps) => (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none">
      <Path
        d="M11.6897 0.775864C12.0896 1.15675 12.105 1.78973 11.7241 2.18966L5.05747 9.18966C4.86873 9.38784 4.60701 9.5 4.33334 9.5C4.05966 9.5 3.79794 9.38784 3.6092 9.18966L0.275864 5.68966C-0.105022 5.28973 -0.0895837 4.65675 0.310347 4.27586C0.710277 3.89498 1.34325 3.91042 1.72414 4.31035L4.33334 7.05L10.2759 0.810347C10.6567 0.410416 11.2897 0.394978 11.6897 0.775864Z"
        fill={fill}
      />
    </Svg>
  ),
  MenuIcon: ({width = 16, height = 14, fill = 'black'}: SvgIconProps) => (
    <View style={{paddingHorizontal: 4, paddingVertical: 5}}>
      <Svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none">
        <Path
          d="M0 1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1C16 1.55228 15.5523 2 15 2H1C0.447715 2 0 1.55228 0 1ZM0 7C0 6.44772 0.447715 6 1 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H1C0.447715 8 0 7.55228 0 7ZM0 13C0 12.4477 0.447715 12 1 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H1C0.447715 14 0 13.5523 0 13Z"
          fill={fill}
        />
      </Svg>
    </View>
  ),
  BackArrowIcon: () => (
    <View style={{paddingHorizontal: 8, paddingVertical: 5}}>
      <Svg width="8" height="14" viewBox="0 0 8 14" fill="none">
        <Path
          d="M7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893Z"
          fill="#201F1E"
        />
      </Svg>
    </View>
  ),
};

export default SvgIcons;
