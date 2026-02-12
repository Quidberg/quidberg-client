import { toInteger } from "lodash";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const deepSearchAndParseDates = (
  obj: unknown,
  dateKeys: string[]
): unknown => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const record = obj as Record<string, unknown>;
  const keys = Object.keys(record);

  if (keys.length === 0) {
    return record;
  }

  for (const key of keys) {
    let value: unknown = record[key];

    if (dateKeys.includes(key) && typeof value === "string") {
      const parsedDate = new Date(value);
      if (!Number.isNaN(parsedDate.getTime())) {
        value = parsedDate;
      }
    }

    record[key] = deepSearchAndParseDates(value, dateKeys);
  }

  return record;
};

export const toTimeString = (val: string | number): string => {
  const intVal = toInteger(val);

  return intVal < 10 ? `0${intVal}` : `${intVal}`;
};
