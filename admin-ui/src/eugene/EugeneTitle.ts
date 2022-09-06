import { Eugene as TEugene } from "../api/eugene/Eugene";

export const EUGENE_TITLE_FIELD = "name";

export const EugeneTitle = (record: TEugene): string => {
  return record.name || record.id;
};
