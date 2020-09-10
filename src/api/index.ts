import axios, { Method } from "axios";

interface QueryArgs {
  successCallback?: (res: any) => void;
  method: Method;
  url: string;
  data?: any;
  cancelToken?: any;
}

export async function queryWrapper({ successCallback, ...params }: QueryArgs) {
  try {
    const response = await axios(params);

    if (successCallback) {
      successCallback(response);
    }
  } catch (error) {
    if (error.isAxiosError) {
      axios.isCancel(error) && console.log("Отмена запроса");
    }
  }
}

export * from "./messages";
export * from "./visits";
export * from "./contacts";
