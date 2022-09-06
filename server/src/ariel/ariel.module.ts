import { Module } from "@nestjs/common";
import { ArielModuleBase } from "./base/ariel.module.base";
import { ArielService } from "./ariel.service";
import { ArielResolver } from "./ariel.resolver";

@Module({
  imports: [ArielModuleBase],
  providers: [ArielService, ArielResolver],
  exports: [ArielService],
})
export class ArielModule {}
