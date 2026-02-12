// import { AuthResponseDto, LoginDto } from "@reactive-resume/dto";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { LoginDto } from "../../libs/dto/auth/login";
import { axios } from "../../../client/libs/api/auth/axios";
import { AuthResponseDto } from "../../libs/dto/response/response";
import { queryClient } from "../../libs/api/auth/query-client";
import { useAdminStore } from "../../store/zusStore";
import { userSchema } from "../../libs/dto/admin";
import { z } from "nestjs-zod/z";

export const login = async (data: LoginDto) => {
  const response = await axios.post<
    AuthResponseDto,
    AxiosResponse<AuthResponseDto>,
    LoginDto
  >("/auth/login", data);

  return response.data;
};

export const useLogin = () => {
  const navigate = useNavigate();
  const setAdminUser = useAdminStore((state) => state.setAdminUser);
  const setUser = (userData: z.infer<typeof userSchema>) => {
    setAdminUser(userData);
  };

  const {
    error,
    isPending: loading,
    mutateAsync: loginFn,
  } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (data.status === "2fa_required") {
        navigate("/auth/verify-otp");
        return;
      }

      setUser(data.user);
      queryClient.setQueryData(["user"], data.user);
    },
  });

  return { login: loginFn, loading, error };
};
