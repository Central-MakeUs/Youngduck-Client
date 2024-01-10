import palette from '@/styles/theme/color';
import {SvgIconProps} from '@/types/ui/svgIcons';
import {TouchableOpacity} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import {styles} from './SvgIcon.style';

const SvgIcons = {
  LineIcon: ({
    width = 8,
    height = 2,
    fill = palette.Another.White,
  }: SvgIconProps) => (
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
  RectangleIcon: ({
    width = 12,
    height = 10,
    fill = palette.Another.White,
  }: SvgIconProps) => (
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
  MenuIcon: ({
    width = 16,
    height = 14,
    fill = palette.Text.Normal,
    onPress,
  }: SvgIconProps) => (
    <TouchableOpacity style={styles.arrow} onPress={onPress}>
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
    </TouchableOpacity>
  ),
  BackArrowIcon: ({
    width = 8,
    height = 14,
    fill = palette.Text.Normal,
    onPress,
  }: SvgIconProps) => (
    <TouchableOpacity style={styles.arrow} onPress={onPress}>
      <Svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none">
        <Path
          d="M7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893Z"
          fill={fill}
        />
      </Svg>
    </TouchableOpacity>
  ),
  RightArrowIcon: ({
    width = 8,
    height = 14,
    fill = palette.Text.Normal,
    onPress,
  }: SvgIconProps) => (
    <TouchableOpacity style={styles.arrow} onPress={onPress}>
      <Svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
          fill={fill}
        />
      </Svg>
    </TouchableOpacity>
  ),
  CancelIcon: ({
    width = 14,
    height = 14,
    fill = palette.Text.Normal,
    onPress,
  }: SvgIconProps) => (
    <TouchableOpacity style={styles.cancel} onPress={onPress}>
      <Svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
          fill={fill}
        />
      </Svg>
    </TouchableOpacity>
  ),
};

export default SvgIcons;
