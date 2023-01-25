import {Item} from 'react-native-multi-selectbox-typescript';
import {NoteType} from '../Types';
export type CardProps = {
  note: NoteType | undefined;
  view: Item | undefined;
  onDelete: (note: NoteType) => void;
};
