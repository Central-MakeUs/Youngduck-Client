import another from '@/styles/colors/another';
import background from '@/styles/colors/background';
import fill from '@/styles/colors/fill';
import line from '@/styles/colors/line';
import primary from '@/styles/colors/primary';
import state from '@/styles/colors/state';
import text from '@/styles/colors/text';

type ValueOfTextColor = (typeof text)[keyof typeof text];
type ValueOfPrimaryColor = (typeof primary)[keyof typeof primary];
type ValueOfFillColor = (typeof fill)[keyof typeof fill];
type ValueOfAnotherColor = (typeof another)[keyof typeof another];
type ValueOfBackgroundColor = (typeof background)[keyof typeof background];
type ValueOfLineColor = (typeof line)[keyof typeof line];
type ValueOfStateColor = (typeof state)[keyof typeof state];

export type ValueOfColor =
  | ValueOfTextColor
  | ValueOfPrimaryColor
  | ValueOfFillColor
  | ValueOfAnotherColor
  | ValueOfBackgroundColor
  | ValueOfLineColor
  | ValueOfStateColor;
