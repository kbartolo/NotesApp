import { StackScreenProps } from "@react-navigation/stack";
import { NoteType } from "../../components/Types";
import { MainStackParams } from "../../routes/types";

export type NoteNavigationProps = StackScreenProps<
  MainStackParams,
  "Note"
>;

export type NoteProps = NoteNavigationProps & {
  note: NoteType;
};
