import text from '@/styles/texts';
import {ValueOfColor} from './color';

export interface ITypography {
  style: KeyofText;
  children: string;
  color?: ValueOfColor;
  m?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  mx?: number;
  my?: number;
}

export type KeyofText = keyof typeof text;
