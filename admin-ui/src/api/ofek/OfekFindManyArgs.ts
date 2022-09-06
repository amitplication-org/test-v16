import { OfekWhereInput } from "./OfekWhereInput";
import { OfekOrderByInput } from "./OfekOrderByInput";

export type OfekFindManyArgs = {
  where?: OfekWhereInput;
  orderBy?: Array<OfekOrderByInput>;
  skip?: number;
  take?: number;
};
