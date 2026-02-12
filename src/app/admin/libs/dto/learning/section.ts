import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";

export const sectionSchema = z.object({
  id: z.string(),
  title: z.string(),
  order: z.number(),
  type: z.enum(["video", "article", "quiz"]),
  lecture: z.instanceof(File),
});

export class SectionDto extends createZodDto(sectionSchema) {}
