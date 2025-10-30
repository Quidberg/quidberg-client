import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useEffect } from "react";

import { UserDto } from "../../dto/user";
import { axios } from "../auth/axios";
import { useAppDispatch } from "../../../app/hooks/regHook";
import { setUser as setUserState } from "../../../app/slices/auth/authSlice";

export const fetchUser = async () => {
  const response = await axios.get<
    UserDto | undefined,
    AxiosResponse<UserDto | undefined>
  >("/user/me");

  return response.data;
};

export const useUser = () => {
  const dispatch = useAppDispatch();

  const {
    error,
    isPending: loading,
    data: user,
  } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });

  useEffect(() => {
    const setUser = (userData: unknown) =>
      dispatch(setUserState(userData));

    // setUser(user ?? null);
    setUser(true);
  }, [user]);

  return { user: user, loading, error };
};
