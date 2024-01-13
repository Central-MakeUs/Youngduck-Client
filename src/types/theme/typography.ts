import text from '@/styles/theme/typography';
import {ValueOfColor} from './color';
import {CommonMarginProps} from '../ui';

export interface ITypography extends CommonMarginProps {
  style: KeyofText;
  children: string;
  color?: ValueOfColor;
}

export type KeyofText = keyof typeof text;
