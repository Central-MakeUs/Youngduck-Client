import {SvgIconProps} from '@/types/svgIcons';
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
};

export default SvgIcons;
