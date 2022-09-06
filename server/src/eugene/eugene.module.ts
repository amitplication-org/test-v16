import { Module } from "@nestjs/common";
import { EugeneModuleBase } from "./base/eugene.module.base";
import { EugeneService } from "./eugene.service";
import { EugeneResolver } from "./eugene.resolver";

@Module({
  imports: [EugeneModuleBase],
  providers: [EugeneService, EugeneResolver],
  exports: [EugeneService],
})
export class EugeneModule {}
