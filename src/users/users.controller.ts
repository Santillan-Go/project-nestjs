import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Res,
  HttpStatus,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    const foundEmail = await this.usersService.getByEmail({
      email: createUserDto.email,
    });

    if (foundEmail)
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: 'email already exist' });
    const created = await this.usersService.create(createUserDto);
    return res.json(created);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const found = await this.usersService.findOne(Number(id));

    if (!found) return res.status(404).json({ message: 'User not found' });
    return res.json(found);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.deleteOne({ id: Number(id) });
  }
}
