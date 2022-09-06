import { Module } from "@nestjs/common";
import { MorModuleBase } from "./base/mor.module.base";
import { MorService } from "./mor.service";
import { MorResolver } from "./mor.resolver";

@Module({
  imports: [MorModuleBase],
  providers: [MorService, MorResolver],
  exports: [MorService],
})
export class MorModule {}
