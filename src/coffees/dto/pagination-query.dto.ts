import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  // @Type(() => Number) //Atumaticamente convertirÃ¡ el valor a number
  limit: number;

  @IsOptional()
  @IsPositive()
  offset: number;
}
