import { AxiosInstance, AxiosResponse } from "axios";
import { MessageDto } from "../../dto/auth/message";

export const refreshToken = async (axios: AxiosInstance) => {
  const response = await axios.post<MessageDto, AxiosResponse<MessageDto>>(
    "/auth/refresh"
  );

  return response.data;
};
