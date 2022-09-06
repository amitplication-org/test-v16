/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ArielWhereInput } from "./ArielWhereInput";
import { Type } from "class-transformer";
import { ArielOrderByInput } from "./ArielOrderByInput";

@ArgsType()
class ArielFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ArielWhereInput,
  })
  @Field(() => ArielWhereInput, { nullable: true })
  @Type(() => ArielWhereInput)
  where?: ArielWhereInput;

  @ApiProperty({
    required: false,
    type: [ArielOrderByInput],
  })
  @Field(() => [ArielOrderByInput], { nullable: true })
  @Type(() => ArielOrderByInput)
  orderBy?: Array<ArielOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ArielFindManyArgs };