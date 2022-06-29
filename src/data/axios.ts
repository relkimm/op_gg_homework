import { AxiosResponse } from "axios";

export const AxiosReturn = <T>(response: AxiosResponse<T> | undefined) => {
  if (response === null || response === undefined || response.data === null) {
    return undefined;
  }
  return response.data;
};
