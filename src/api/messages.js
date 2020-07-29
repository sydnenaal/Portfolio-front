import { queryWrapper } from "api";

export const sendMessage = ({ data, successCallback }) =>
  queryWrapper({
    url:
      "https://sydnenaal-portfolio.herokuapp.com/api/public/messages/message",
    method: "put",
    body: { data },
    successCallback: successCallback,
  });
