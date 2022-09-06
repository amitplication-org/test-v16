import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ArielResolverBase } from "./base/ariel.resolver.base";
import { Ariel } from "./base/Ariel";
import { ArielService } from "./ariel.service";

@graphql.Resolver(() => Ariel)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ArielResolver extends ArielResolverBase {
  constructor(
    protected readonly service: ArielService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
