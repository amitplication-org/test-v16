import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { EugeneResolverBase } from "./base/eugene.resolver.base";
import { Eugene } from "./base/Eugene";
import { EugeneService } from "./eugene.service";

@graphql.Resolver(() => Eugene)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EugeneResolver extends EugeneResolverBase {
  constructor(
    protected readonly service: EugeneService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
