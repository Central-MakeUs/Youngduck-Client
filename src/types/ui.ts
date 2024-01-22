//버튼 타입 지정
export type IVariant = 'primary' | 'secondary' | 'default';

export type DetailStyle = {
  backgroundColor: string;
  textColor: string;
};

// 배너 타입 지정
export type BannerType = 'screening' | 'popcornParty';
export interface IBannerContent {
  source: any;
  title1: string;
  title2: string;
  content: string;
  button: string;
}

// 체크박스 타입 지정
export type ICheckBox = 'on' | 'off' | 'indeterminate';

// chip 타입 지정
export type IChip = 'primary' | 'default';

// textInput 타입 지정
export type TextInputType =
  | 'default'
  | 'writed'
  | 'caution'
  | 'active'
  | 'warning';

export type TextInputStyle = {
  borderColor: string;
  titleColor?: string;
  contentColor?: string;
};

// optionButton 타입 지정
export type OptionButtonType = 'heart' | 'alarm' | 'write';

// 공통 컴포넌트 중복 prop 타입 지정
export interface CommonTextProps {
  text: string;
}

export interface CommonMarginVerticalProps {
  mt?: number;
  mb?: number;
}

export interface CommonMarginProps extends CommonMarginVerticalProps {
  m?: number;
  mr?: number;
  ml?: number;
  mx?: number;
  my?: number;
}

export interface CommonTopProp {
  top: number;
}
