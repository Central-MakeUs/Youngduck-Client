import another from './another';
import background from './background';
import fill from './fill';
import line from './line';
import primary from './primary';
import state from './state';
import text from './text';

const palette = {
  Another: another,
  Background: background,
  Fill: fill,
  Line: line,
  Primary: primary,
  State: state,
  Text: text,
} as const;

export type KeyofPalette = keyof typeof palette;

export default palette;
