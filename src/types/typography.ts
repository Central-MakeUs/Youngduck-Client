import text from '@/styles/texts';
import {ValueOfTextColor} from './color';

export interface ITypography {
  style: KeyofText;
  children: string;
  color?: ValueOfTextColor;
  m?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  mx?: number;
  my?: number;
}

export type KeyofText = keyof typeof text;
