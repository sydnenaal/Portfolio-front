import { queryWrapper } from "api";

export function sendMessage({ data, successCallback }) {
  return queryWrapper({
    url:
      "https://sydnenaal-portfolio.herokuapp.com/api/public/messages/message",
    method: "put",
    data: { data },
    successCallback: successCallback,
  });
}
