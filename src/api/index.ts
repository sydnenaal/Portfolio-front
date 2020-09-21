import { Method } from "axios";

export interface ApiParams {
  url: string;
  method: Method;
}

export * from "./messages";
export * from "./visits";
export * from "./contacts";
