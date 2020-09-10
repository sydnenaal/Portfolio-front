import { queryWrapper } from "api";

export function getContacts({ successCallback }) {
  return queryWrapper({
    url: "/contacts",
    method: "get",
    successCallback: successCallback,
  });
}
