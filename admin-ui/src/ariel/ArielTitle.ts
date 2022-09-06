import { Ariel as TAriel } from "../api/ariel/Ariel";

export const ARIEL_TITLE_FIELD = "name";

export const ArielTitle = (record: TAriel): string => {
  return record.name || record.id;
};
