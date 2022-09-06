import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { EugeneServiceBase } from "./base/eugene.service.base";

@Injectable()
export class EugeneService extends EugeneServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
