import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ArielServiceBase } from "./base/ariel.service.base";

@Injectable()
export class ArielService extends ArielServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
