import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Response } from 'express';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto, res: Response): Promise<Response<any, Record<string, any>>>;
    findAll(): Promise<{
        id: number;
        email: string;
        name: string | null;
        password: string;
    }[]>;
    findOne(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
