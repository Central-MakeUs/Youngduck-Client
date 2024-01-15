import palette from '@/styles/theme/color';

// 팔레트 키 값 추출 (Another | Background | Fill | Line | Primary | State | Text)
type PaletteKey = keyof typeof palette;

type ColorType<T extends PaletteKey> = {
  [Key in keyof (typeof palette)[T]]: (typeof palette)[T][Key];
};

// 전체 팔레트 객체에 키 값으로 접근 후 해당 색의 원소 값 접근해 타입 지정
export type ValueOfColor =
  | {
      [C in PaletteKey]: ColorType<C>;
    }[PaletteKey][keyof ColorType<PaletteKey>]
  | string;
