export type ContactDataType = {
  client: string;
  email: string;
  text: string;
  date: number;
  isRead: boolean;
  isImportant: boolean;
  isDeleted: boolean;
};

export type Action = {
  readonly type: Type;
  readonly payload?: string;
};

export type Type = "client" | "email" | "text" | "clear" | "";
