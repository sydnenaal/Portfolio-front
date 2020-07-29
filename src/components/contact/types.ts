export type ContactDataType = {
  client: string;
  email: string;
  text: string;
  date: number;
  isRead: boolean;
  isImportant: boolean;
  isDeleted: boolean;
};

type SetName = {
  readonly type: Types;
  readonly payload: string;
};

type SetEmail = {
  readonly type: Types;
  readonly payload: string;
};

type SetText = {
  readonly type: Types;
  readonly payload: string;
};

type ClearStore = {
  readonly type: Types;
  readonly payload?: null;
};

export type Types = "SET_NAME" | "SET_EMAIL" | "SET_TEXT" | "CLEAR_STORE";
export type Actions = SetName | SetEmail | SetText | ClearStore;
