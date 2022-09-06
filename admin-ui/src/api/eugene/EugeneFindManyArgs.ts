import { EugeneWhereInput } from "./EugeneWhereInput";
import { EugeneOrderByInput } from "./EugeneOrderByInput";

export type EugeneFindManyArgs = {
  where?: EugeneWhereInput;
  orderBy?: Array<EugeneOrderByInput>;
  skip?: number;
  take?: number;
};
