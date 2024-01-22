interface profileTypeStyle {
  width: number;
  height: number;
  borderRadius: number;
}
export const profileStyles: Record<'small' | 'large', profileTypeStyle> = {
  small: {
    width: 24,
    height: 24,
    borderRadius: 24,
  },
  large: {
    width: 54,
    height: 54,
    borderRadius: 54,
  },
};
