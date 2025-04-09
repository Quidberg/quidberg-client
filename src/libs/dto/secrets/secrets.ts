import { z } from "nestjs-zod/z";
import { idSchema } from "../../schema/shared/id";

export const secretsSchema = z.object({
  id: idSchema,
  password: z.string().nullable(),
  lastSignedIn: z.date().nullable(),
  verificationToken: z.string().nullable(),
  twoFactorSecret: z.string().nullable(),
  twoFactorBackupCodes: z.array(z.string()).default([]),
  refreshToken: z.string().nullable(),
  resetToken: z.string().nullable(),
  userId: idSchema,
});
