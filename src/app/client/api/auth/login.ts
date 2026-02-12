// import { AuthResponseDto, LoginDto } from "@reactive-resume/dto";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../store/hooks/regHook";
import { setUser as setUserState } from "../../store/slices/auth/authSlice";
import { LoginDto } from "../../libs/dto/auth/login";
import { AuthResponseDto } from "../../libs/dto/response/response";
import { axios } from "../../libs/api/auth/axios";
import { queryClient } from "../../libs/api/auth/query-client";

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
  const dispatch = useAppDispatch();
  const setUser = (userData: unknown) =>
    dispatch(setUserState(userData));

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
