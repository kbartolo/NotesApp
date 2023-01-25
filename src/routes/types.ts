import {NoteType } from "@components";

export type MainStackParams = {
  Home: undefined;
  Note: { note: NoteType | undefined};
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainStackParams {}
  }
}
