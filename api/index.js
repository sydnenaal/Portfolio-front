import axios from "axios";

export const queryWrapper = async ({
  successCallback,
  method,
  url,
  cancelToken,
  body,
}) => {
  try {
    const response = await axios({
      method: method,
      url: url,
      data: body,
      cancelToken: cancelToken,
    });

    successCallback && successCallback(response);
  } catch (error) {
    if (error.isAxiosError) {
      axios.isCancel(error) && console.log("Отмена запроса");
    }
  }
};

export * from "./messages";
export * from "./visits";
export * from "./contacts";
