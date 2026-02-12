import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";
// import { usernameSchema } from "../user/user";

//  category: 'year' | 'custom',
//   title: string,
//   id: string,
//   created: string,
//   questions: {subject: string, total: number}[],
//   currentScore: number

export const ExamById = z.object({
  category: z.enum(["year", "custom"]),
  title: z.string(),
  createdAt: z.string(),
  id: z.string(),
  array: z.array(
    z.object({ subject: z.string(), total: z.number() })
  ),
});

export class ExamByIdDto extends createZodDto(ExamById) {}
