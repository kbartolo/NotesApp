import {Item} from 'react-native-multi-selectbox-typescript';
export type NoteType = NoteItem | undefined;

export type NoteItem = {
  id: string;
  title: string;
  desc: string;
  tags: Item[];
  createdDate: string;
};