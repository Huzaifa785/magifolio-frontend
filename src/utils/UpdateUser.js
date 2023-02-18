// update user
import { AxiosInstance } from "./AxiosInstance";

export const UpdateUser = async (userDetails) => {
  const response = await AxiosInstance.put(
    `/users/user/${localStorage.getItem("username")}`,
    userDetails,
    {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    }
  );
  return response.data;
};
