import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {

    @IsNotEmpty()
    pk_user : number;

    @IsNotEmpty()
    email : string;

    @IsNotEmpty()
    name : string;
}
