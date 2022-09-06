import { Amit as TAmit } from "../api/amit/Amit";

export const AMIT_TITLE_FIELD = "name";

export const AmitTitle = (record: TAmit): string => {
  return record.name || record.id;
};
