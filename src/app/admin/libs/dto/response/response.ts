import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";
import { userSchema } from "../admin";

export const authResponseSchema = z.object({
  status: z.enum(["authenticated", "2fa_required"]),
  user: userSchema,
});

export class AuthResponseDto extends createZodDto(
  authResponseSchema
) {}
