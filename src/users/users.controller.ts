import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Res, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags("users")
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    ) {

    }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(@Res() response) {
    const data = await this.usersService.findAll();
    return response.status(HttpStatus.OK).json({
      "data" : data,
      "status" : 1,
      "message" : "Success request users"
    });
    /*if (data.length > 0) {
      return response.status(HttpStatus.OK).json({
        "data" : data,
        "status" : 1,
        "message" : "Success request users"
      });
    } else {
      return response.status(HttpStatus.OK).json({
        "data" : null,
        "status" : 2,
        "message" : "not data"
      });
    }*/
    
    
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  /*@Delete(':id')
  remove(@Param('id') id: string) {
    //return this.usersService.remove(+id);
  }*/
}
