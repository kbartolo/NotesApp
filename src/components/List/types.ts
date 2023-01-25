import {Item} from 'react-native-multi-selectbox-typescript';
import {NoteType} from '../Types';

export type ListProps = {
  notes: NoteType[];
  view?: Item;
  onDelete: (note: NoteType) => void;
};
