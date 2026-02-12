import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";
import { sectionSchema } from "./section";

export const courseSchema = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string(),
  thumbnailUrl: z.string(),
  password: z.password().min(6),
  slug: z.string(),
  description: z.string(),
  shortDescription: z.string(),
  sections: z.array(sectionSchema),
  //   thumbnail: ,
});

export type CourseType = z.infer<typeof courseSchema>;

export class CourseDto extends createZodDto(courseSchema) {}
