import {GestureResponderEvent} from 'react-native';
import {Item} from 'react-native-multi-selectbox-typescript';
export type FloatingProps = {
  options: Item[];
  setOption: (option: Item) => void;
};

export type FloatingItemProps = {
  option: Item;
  setOption: (option: Item) => void;
};
