import {QueryKey} from '@tanstack/react-query';

export const isArrayWithNestedArrays = <T extends QueryKey>(arr: T[]) => {
  return Array.isArray(arr) && arr.some(Array.isArray);
};
