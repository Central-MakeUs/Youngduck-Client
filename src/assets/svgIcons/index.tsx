import palette from '@/styles/theme/color';
import {TouchableOpacity} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import {svgIconStyles} from './SvgIcons.style';
import {ValueOfColor} from '@/types/theme/color';

export interface SvgIconProps {
  width?: number;
  height?: number;
  fill?: ValueOfColor;
  onPress?: () => void;
}

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
    <TouchableOpacity style={svgIconStyles.arrow} onPress={onPress}>
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
    <TouchableOpacity style={svgIconStyles.arrow} onPress={onPress}>
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
    <TouchableOpacity style={svgIconStyles.arrow} onPress={onPress}>
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
    <TouchableOpacity style={svgIconStyles.cancel} onPress={onPress}>
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
  MyPageIcon: ({
    width = 36,
    height = 28,
    fill = palette.Text.Disable,
  }: SvgIconProps) => (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none">
      <Path
        d="M6.86049 26.9997C6.65112 27.0041 6.43763 26.9591 6.23731 26.8589C5.5787 26.5296 5.31174 25.7288 5.64105 25.0702C7.23439 21.8835 11.4999 19 15.9999 19C20.4998 19 24.7654 21.8835 26.3587 25.0702C26.688 25.7288 26.421 26.5296 25.7624 26.8589C25.5621 26.9591 25.3486 27.0041 25.1393 26.9997H6.86049Z"
        fill={fill}
      />
      <Path
        d="M15.9999 5C12.6862 5 9.99988 7.68629 9.99988 11C9.99988 14.3137 12.6862 17 15.9999 17C19.3136 17 21.9999 14.3137 21.9999 11C21.9999 7.68629 19.3136 5 15.9999 5Z"
        fill={fill}
      />
    </Svg>
  ),
  ScreeningIcon: ({
    width = 28,
    height = 26,
    fill = palette.Text.Disable,
  }: SvgIconProps) => (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 7.39999C0 8.86504 0.562584 10.1987 1.4835 11.1967C0.575931 11.9671 0 13.1163 0 14.4V21.4C0 23.7196 1.8804 25.6 4.2 25.6H16.8C19.1196 25.6 21 23.7196 21 21.4V20.1129L25.7254 23.8932C26.1457 24.2294 26.7214 24.295 27.2065 24.0618C27.6915 23.8287 28 23.3382 28 22.8V11.6C28 11.0618 27.6915 10.5713 27.2065 10.3382C26.7214 10.1051 26.1457 10.1706 25.7254 10.5068L20.9985 14.2883C20.9635 12.9461 20.2988 11.7607 19.2889 11.0165C20.3499 9.88901 21 8.37042 21 6.69999C21 3.2206 18.1794 0.399994 14.7 0.399994C12.4776 0.399994 10.524 1.55073 9.40248 3.28886C8.40386 2.36476 7.06788 1.79999 5.6 1.79999C2.50721 1.79999 0 4.3072 0 7.39999ZM11.2 6.69999C11.2 4.767 12.767 3.19999 14.7 3.19999C16.633 3.19999 18.2 4.767 18.2 6.69999C18.2 8.63299 16.633 10.2 14.7 10.2C12.767 10.2 11.2 8.63299 11.2 6.69999ZM2.8 7.39999C2.8 5.8536 4.0536 4.59999 5.6 4.59999C7.1464 4.59999 8.4 5.8536 8.4 7.39999C8.4 8.94639 7.1464 10.2 5.6 10.2C4.0536 10.2 2.8 8.94639 2.8 7.39999ZM10.5 16.5C10.5 15.7268 11.1268 15.1 11.9 15.1H14.7C15.4732 15.1 16.1 15.7268 16.1 16.5C16.1 17.2732 15.4732 17.9 14.7 17.9H11.9C11.1268 17.9 10.5 17.2732 10.5 16.5Z"
        fill={fill}
      />
    </Svg>
  ),
  PopCornParty: ({
    width = 32,
    height = 24,
    fill = palette.Text.Disable,
  }: SvgIconProps) => (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24.1643 13.434C24.2147 12.9054 24.1979 12.3617 24.1066 11.8131C23.5405 8.41303 20.3253 6.11559 16.9252 6.68166C14.8428 7.02834 13.174 8.36869 12.3233 10.1366C11.7627 10.0256 11.173 10.012 10.5759 10.1114C7.91959 10.5536 6.12472 13.0655 6.56696 15.7218C6.80027 17.1232 7.6096 18.2848 8.71227 19.0047C8.33562 19.802 8.18968 20.7182 8.34546 21.654C8.75232 24.0978 11.0633 25.7491 13.5071 25.3422C14.5206 25.1735 15.3978 24.6772 16.0485 23.9798C17.1022 24.8634 18.5212 25.2983 19.984 25.0548C22.2394 24.6793 23.8737 22.8118 24.0451 20.6307C25.7134 19.9667 26.7534 18.2101 26.4464 16.3666C26.2218 15.0174 25.3297 13.9459 24.1643 13.434ZM14.5389 15.7797C15.017 15.7797 15.256 15.3516 15.256 14.8236C15.256 14.2956 15.017 13.8676 14.5389 13.8676C14.0609 13.8676 13.8219 14.2956 13.8219 14.8236C13.8219 15.3516 14.0609 15.7797 14.5389 15.7797ZM19.2395 14.8236C19.2395 15.3516 19.0005 15.7797 18.5225 15.7797C18.0445 15.7797 17.8055 15.3516 17.8055 14.8236C17.8055 14.2956 18.0445 13.8676 18.5225 13.8676C19.0005 13.8676 19.2395 14.2956 19.2395 14.8236ZM19.5554 17.6317C19.6982 17.4395 19.6581 17.168 19.466 17.0253C19.2739 16.8825 19.0024 16.9225 18.8596 17.1147C18.3906 17.7459 17.5655 18.0823 16.6455 18.076C15.7278 18.0697 14.7818 17.7201 14.1283 17.0667C13.9591 16.8974 13.6846 16.8974 13.5154 17.0667C13.3461 17.2359 13.3461 17.5104 13.5154 17.6796C14.3491 18.5134 15.5228 18.9352 16.6396 18.9428C17.754 18.9504 18.8781 18.5431 19.5554 17.6317Z"
        fill={fill}
      />
      <Path
        d="M8.61096 24.4953C8.55513 24.4546 8.50046 24.4118 8.44706 24.367C6.86897 25.0628 4.96209 24.6258 3.85893 23.2005C3.14341 22.276 2.91523 21.1284 3.13499 20.0669C2.40782 19.8758 1.73564 19.4522 1.23989 18.8117C0.0445407 17.2672 0.327572 15.0461 1.87205 13.8508C2.46341 13.3931 3.15397 13.1521 3.84816 13.1157C3.93597 12.0814 4.44001 11.0856 5.32566 10.4002C6.30342 9.64344 7.53064 9.4318 8.64176 9.71867C6.45838 10.866 5.15338 13.3201 5.58057 15.8861C5.8133 17.2839 6.52264 18.4845 7.51279 19.348C7.28035 20.125 7.21716 20.9658 7.35907 21.8182C7.53022 22.8462 7.97691 23.7596 8.61096 24.4953Z"
        fill={fill}
      />
      <Path
        d="M25.0931 11.6489C25.1601 12.0517 25.1925 12.4528 25.1924 12.8491C26.3422 13.567 27.1924 14.7576 27.4329 16.2024C27.7837 18.3096 26.7345 20.3245 24.9651 21.2999C24.7645 22.3991 24.2539 23.4091 23.5131 24.2178C24.928 25.0304 26.7624 24.8769 28.0287 23.715C28.8907 22.9241 29.3097 21.8309 29.2724 20.7467C30.0219 20.6811 30.7565 20.377 31.3537 19.829C32.7938 18.5077 32.8901 16.2691 31.5688 14.8291C31.0628 14.2777 30.4225 13.9233 29.7439 13.7701C29.8321 12.735 29.5033 11.6677 28.7456 10.8419C27.65 9.64781 25.9741 9.30377 24.546 9.8454C24.8006 10.4074 24.9869 11.0115 25.0931 11.6489Z"
        fill={fill}
      />
    </Svg>
  ),
  Vote: ({
    width = 18,
    height = 18,
    fill = palette.Primary.Deep,
  }: SvgIconProps) => (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.57988 3.96137L12.5039 4.82961C13.1838 4.9495 13.6183 5.70802 13.4745 6.52389L12.5434 11.8043H4.92764L6.08839 5.22151C6.23222 4.40568 6.90001 3.84149 7.57988 3.96137ZM10.9871 7.27577C11.0983 7.19383 11.1219 7.03732 11.04 6.92622C10.9581 6.81507 10.8016 6.79141 10.6904 6.8733L8.95651 8.15156L8.43306 7.36379C8.35661 7.24876 8.20143 7.21749 8.08644 7.29389C7.97145 7.37034 7.94019 7.52548 8.01659 7.64047L8.68533 8.64691C8.72319 8.7039 8.78275 8.74285 8.85013 8.75476C8.91751 8.76661 8.98682 8.75036 9.04189 8.70976L10.9871 7.27577Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 13.3043C3 12.8901 3.33579 12.5543 3.75 12.5543H14.25C14.6642 12.5543 15 12.8901 15 13.3043C15 13.7185 14.6642 14.0543 14.25 14.0543H3.75C3.33579 14.0543 3 13.7185 3 13.3043Z"
        fill={fill}
      />
    </Svg>
  ),
};

export default SvgIcons;
