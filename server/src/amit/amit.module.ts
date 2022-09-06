import { Module } from "@nestjs/common";
import { AmitModuleBase } from "./base/amit.module.base";
import { AmitService } from "./amit.service";
import { AmitResolver } from "./amit.resolver";

@Module({
  imports: [AmitModuleBase],
  providers: [AmitService, AmitResolver],
  exports: [AmitService],
})
export class AmitModule {}
