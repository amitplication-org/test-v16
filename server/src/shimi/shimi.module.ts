import { Module } from "@nestjs/common";
import { ShimiModuleBase } from "./base/shimi.module.base";
import { ShimiService } from "./shimi.service";
import { ShimiResolver } from "./shimi.resolver";

@Module({
  imports: [ShimiModuleBase],
  providers: [ShimiService, ShimiResolver],
  exports: [ShimiService],
})
export class ShimiModule {}
