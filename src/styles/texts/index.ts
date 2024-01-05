import {StyleSheet} from 'react-native';

const text = StyleSheet.create({
  Title1: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 30,
  },
  Title2: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28,
  },
  Label1: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
  },
  Label2: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
  },
  Label3: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 18,
  },
  Label4: {
    fontWeight: '600',
    fontSize: 11,
    lineHeight: 14,
  },
  Body1: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
  },
  Body2: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
  },
  Chips1: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
  },
  Chips2: {
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 16,
  },
  Caption: {
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 14,
  },
});

export type KeyofText = keyof typeof text;

export default text;
