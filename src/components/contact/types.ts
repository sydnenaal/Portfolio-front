export type ContactDataType = {
  [name: string]: {
    value: string;
    validationRule: string;
    error: string;
  };
};

export type Action = {
  readonly type: Type;
  readonly payload?: string;
};

export type Type = "client" | "email" | "text" | "clear" | "";
