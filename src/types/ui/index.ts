//버튼 타입 지정
export type IVariant = 'primary' | 'secondary' | 'default';

export type DetailStyle = {
  backgroundColor: string;
  textColor: string;
};

// 체크박스 타입 지정
export type ICheckBox = 'on' | 'off' | 'indeterminate';

// chip 타입 지정
export type IChip = 'primary' | 'default';

// textInput 타입 지정
export type ITextInput = 'default' | 'writed' | 'caution' | 'active';

export type TextInputStyle = {
  borderColor: string;
  titleColor?: string;
  contentColor?: string;
};

// 공통 컴포넌트 중복 prop 타입 지정
export interface CommonTextProps {
  text: string;
}
