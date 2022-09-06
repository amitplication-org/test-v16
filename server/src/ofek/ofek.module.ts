import { Module } from "@nestjs/common";
import { OfekModuleBase } from "./base/ofek.module.base";
import { OfekService } from "./ofek.service";
import { OfekResolver } from "./ofek.resolver";

@Module({
  imports: [OfekModuleBase],
  providers: [OfekService, OfekResolver],
  exports: [OfekService],
})
export class OfekModule {}
