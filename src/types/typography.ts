import text from '@/styles/texts';
import {ValueOfTextColor} from './color';
import {TextStyle} from 'react-native';

export interface ITypography {
  typography?: KeyofText;
  style?: TextStyle;
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
