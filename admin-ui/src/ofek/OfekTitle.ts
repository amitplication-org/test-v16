import { Ofek as TOfek } from "../api/ofek/Ofek";

export const OFEK_TITLE_FIELD = "name";

export const OfekTitle = (record: TOfek): string => {
  return record.name || record.id;
};
