import body from './body';
import caption from './caption';
import chips from './chips';
import label from './label';
import title from './title';

const text = {
  Title: title,
  Label: label,
  Body: body,
  Chips: chips,
  Caption: caption,
};

export type KeyofText = keyof typeof text;

export default text;
