import { useEffect, useMemo } from "react";
import axios, { CancelTokenSource, Method } from "axios";

interface QueryArgs {
  method: Method;
  url: string;
  body?: {
    data: any;
  };
}

//TODO: подключить node.env
const appHost = "https://sydnenaal-portfolio.herokuapp.com/";

function useRequest() {
  const { cancel, token }: CancelTokenSource = useMemo(
    axios.CancelToken.source,
    []
  );

  useEffect(() => cancel, [cancel]);

  return async function (
    params: QueryArgs,
    successCallback?: (res: any) => void
  ) {
    try {
      const url = `${appHost}api/public/${params.url}`;
      const paramsWithToken = { ...params, url, cancelToken: token };
      const response = await axios(paramsWithToken);

      if (successCallback) {
        successCallback(response);
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Отмена запроса");
      }
    }
  };
}

export default useRequest;
