/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Amit } from "@prisma/client";

export class AmitServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AmitFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AmitFindManyArgs>
  ): Promise<number> {
    return this.prisma.amit.count(args);
  }

  async findMany<T extends Prisma.AmitFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AmitFindManyArgs>
  ): Promise<Amit[]> {
    return this.prisma.amit.findMany(args);
  }
  async findOne<T extends Prisma.AmitFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AmitFindUniqueArgs>
  ): Promise<Amit | null> {
    return this.prisma.amit.findUnique(args);
  }
  async create<T extends Prisma.AmitCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AmitCreateArgs>
  ): Promise<Amit> {
    return this.prisma.amit.create<T>(args);
  }
  async update<T extends Prisma.AmitUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AmitUpdateArgs>
  ): Promise<Amit> {
    return this.prisma.amit.update<T>(args);
  }
  async delete<T extends Prisma.AmitDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AmitDeleteArgs>
  ): Promise<Amit> {
    return this.prisma.amit.delete(args);
  }
}
