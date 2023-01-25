import {Item} from 'react-native-multi-selectbox-typescript';

export type CustomSelectProps = {
  tags: Item[] | undefined;
  options: Item[] | undefined;
  onSelected: (items:Item[]) => void;
};
