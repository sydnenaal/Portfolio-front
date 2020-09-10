import { queryWrapper } from "api";

export function incrementVisits() {
  return queryWrapper({
    url: "https://sydnenaal-portfolio.herokuapp.com/api/public/statistic",
    method: "get",
  });
}
