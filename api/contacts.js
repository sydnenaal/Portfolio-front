import { queryWrapper } from "api";

export const getContacts = ({ successCallback }) =>
  queryWrapper({
    url: "https://sydnenaal-portfolio.herokuapp.com/api/public/contacts",
    method: "get",
    successCallback: successCallback,
  });
