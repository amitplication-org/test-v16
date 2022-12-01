/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AmitWhereInput } from "./AmitWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AmitListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AmitWhereInput,
  })
  @ValidateNested()
  @Type(() => AmitWhereInput)
  @IsOptional()
  @Field(() => AmitWhereInput, {
    nullable: true,
  })
  every?: AmitWhereInput;

  @ApiProperty({
    required: false,
    type: () => AmitWhereInput,
  })
  @ValidateNested()
  @Type(() => AmitWhereInput)
  @IsOptional()
  @Field(() => AmitWhereInput, {
    nullable: true,
  })
  some?: AmitWhereInput;

  @ApiProperty({
    required: false,
    type: () => AmitWhereInput,
  })
  @ValidateNested()
  @Type(() => AmitWhereInput)
  @IsOptional()
  @Field(() => AmitWhereInput, {
    nullable: true,
  })
  none?: AmitWhereInput;
}
export { AmitListRelationFilter };
