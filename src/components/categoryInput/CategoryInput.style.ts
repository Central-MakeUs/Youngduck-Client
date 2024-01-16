import {StyleSheet} from 'react-native';

<<<<<<<< HEAD:src/components/categoryInput/CategoryInput.style.ts
export const categoryInputTypes: Record<ITextInput, TextInputStyle> = {
  default: {
    borderColor: palette.Line.Normal,
    titleColor: palette.Text.Alternative,
    contentColor: palette.Text.Alternative,
  },
  writed: {
    borderColor: palette.Line.Normal,
    titleColor: palette.Text.Strong,
    contentColor: palette.Text.Alternative,
  },
  caution: {
    borderColor: palette.State.Point,
    titleColor: palette.State.Point,
    contentColor: palette.State.Point,
  },
  active: {
    borderColor: palette.Primary.Normal,
    titleColor: palette.Text.Strong,
    contentColor: palette.Text.Alternative,
  },
};
export const categoryInputStyles = StyleSheet.create({
  container: {
========
export const textInputStyles = StyleSheet.create({
  input: {
>>>>>>>> a601cc6e5033206e676542eed864d731e0581af8:src/components/textInput/TextInput.style.ts
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
