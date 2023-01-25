import {Item} from 'react-native-multi-selectbox-typescript';

export type ToolBarProps = {
  onView: (view: Item) => void;
  onTag: (tag: Item) => void;
};
