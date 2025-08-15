import { z } from "zod";

export const ResultProvidedSchema = z.array(
  z.object({
    resultType: z.string(),
    result: z.number().or(z.object({ grade: z.string(), subject: z.string() })),
  })
);

export const OracleResponseDTOSchema = z.object({
  university: z.object({
    universityId: z.string().uuid(),
    universityName: z.string(),
  }),
  course: z.object({
    courseId: z.string().uuid(),
    courseName: z.string(),
  }),
  analysis: z.object({
    resultsProvided: ResultProvidedSchema,
    cutoffMark: z.object({
      main: z.number(),
      catchment: z.array(
        z.object({ catchmentId: z.string(), cutoff: z.number() })
      ),
    }),
    offset: z.object({
      offsetType: z.string(),
      message: z.string(),
      margin: z.number(),
      year: z.string(),
    }),
  }),
  recommendations: z.object({}),
});

export type OracleResponseDTOType = z.infer<typeof OracleResponseDTOSchema>;

export const OracleFormDTOSchema = z.object({
  resultProvided: ResultProvidedSchema,
  universityId: z.string(),
  courseId: z.string(),
});

export type OracleFormDTOType = z.infer<typeof OracleFormDTOSchema>;
