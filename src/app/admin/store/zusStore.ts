import { create } from "zustand";
import { userSchema } from "../libs/dto/admin";
import { z } from "nestjs-zod/z";

type State = {
  adminUser: null | z.infer<typeof userSchema>;
};

type Actions = {
  setAdminUser: (user: State["adminUser"]) => void;
};

export const useAdminStore = create<State & Actions>((set) => ({
  adminUser: null,
  setAdminUser: (user) => set({ adminUser: user }),
}));
