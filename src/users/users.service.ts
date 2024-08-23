// DEPLOY THIS APP
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/app.service';
import * as bcript from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    //hash password
    const hashpassword = await bcript.hash(createUserDto.password, 10);

    createUserDto.password = hashpassword;

    return await this.prisma.user.create({ data: createUserDto });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }

  async getByEmail({ email }: { email: string }) {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }

  async deleteOne({ id }: { id: number }) {
    await this.prisma.user.delete({ where: { id } });
    return { message: 'User deleted successfully' };
  }
}
