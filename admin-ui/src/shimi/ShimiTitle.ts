import { Shimi as TShimi } from "../api/shimi/Shimi";

export const SHIMI_TITLE_FIELD = "name";

export const ShimiTitle = (record: TShimi): string => {
  return record.name || record.id;
};
