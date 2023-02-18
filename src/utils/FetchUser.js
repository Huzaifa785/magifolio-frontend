// fetch the user from the server by username
import { AxiosInstance } from "./AxiosInstance";

export const FetchUser = async (username) => {
  const response = await AxiosInstance.get(`/users/user/${username}`);
  return response.data;
};
