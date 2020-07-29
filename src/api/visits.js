import { queryWrapper } from "api";

export const incrementVisits = () =>
  queryWrapper({
    url: "https://sydnenaal-portfolio.herokuapp.com/api/public/statistic",
    method: "get",
  });
